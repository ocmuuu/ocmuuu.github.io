import http.server
import socketserver
import os
import json
from urllib.parse import quote, unquote

# Configuration
PORT = 8000
DIRECTORY = "."  # Serve the current directory
FOLDERS = [f"page{i}" for i in range(1, 348)]  # page1 to page347
IMAGE_EXTENSIONS = {'.webp', '.jpeg', '.png', '.jpg'}  # Supported image extensions

# Custom handler to serve the slideshow page and handle deletion
class SlideshowHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def do_GET(self):
        if self.path == '/' or self.path == '/index.html':
            self.send_slideshow_page()
        else:
            super().do_GET()

    def do_POST(self):
        if self.path == '/delete':
            self.handle_delete()
        else:
            self.send_error(404, "Endpoint not found")

    def send_slideshow_page(self):
        # Collect all image paths from page1 to page347
        images = []
        for folder in FOLDERS:
            folder_path = os.path.join(DIRECTORY, folder)
            if os.path.isdir(folder_path):
                for file in os.listdir(folder_path):
                    if os.path.splitext(file)[1].lower() in IMAGE_EXTENSIONS:
                        # Normalize path separators and URL-encode
                        image_path = quote(os.path.join(folder, file).replace(os.sep, '/'))
                        images.append(image_path)

        # Log number of images found for debugging
        print(f"Found {len(images)} images")

        # Generate HTML with embedded image list, jQuery, and buttons
        html = f"""
        <!DOCTYPE html>
        <html>
        <head>
            <title>Image Slideshow</title>
            <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
            <style>
                body {{
                    margin: 0;
                    height: 100vh;
                }}
                .controls {{
                    position: fixed;
                    bottom: 20px;
                    left: 50%;
                    transform: translateX(-50%);
                    display: flex;
                    gap: 10px;
                }}
                button {{
                    padding: 10px 20px;
                    font-size: 16px;
                    cursor: pointer;
                    background-color: #333;
                    color: white;
                    border: none;
                    border-radius: 5px;
                }}
                button:hover {{
                    background-color: #555;
                }}
            </style>
        </head>
        <body>
            <div class="controls">
                <button id="prev">Previous</button>
                <button id="next">Next</button>
                <button id="delete">Delete</button>
            </div>
            <script>
                $(document).ready(function() {{
                    const images = {json.dumps(images)};
                    let currentIndex = 0;

                    function changeBackground() {{
                        if (images.length === 0) {{
                            $('body').html('<h1>No images found in page1 to page347.</h1>');
                            return;
                        }}
                        $('body').css({{ 'background-image': `url('${{images[currentIndex]}}')`, 'background-repeat': 'repeat' }});
                        console.log('Current image:', images[currentIndex]); // Debug image path
                    }}

                    // Show first image
                    changeBackground();

                    // Previous button
                    $('#prev').click(function() {{
                        currentIndex = (currentIndex - 1 + images.length) % images.length; // Go to previous
                        changeBackground();
                    }});

                    // Next button
                    $('#next').click(function() {{
                        currentIndex = (currentIndex + 1) % images.length; // Go to next
                        changeBackground();
                    }});

                    // Delete button
                    $('#delete').click(function() {{
                        if (images.length === 0) return;
                        const imageToDelete = images[currentIndex];
                        $.post('/delete', {{ path: imageToDelete }}, function(response) {{
                            console.log('Delete response:', response);
                            // Remove deleted image from array
                            images.splice(currentIndex, 1);
                            if (images.length === 0) {{
                                $('body').html('<h1>No images found in page1 to page347.</h1>');
                                return;
                            }}
                            // Adjust index if at the end
                            if (currentIndex >= images.length) {{
                                currentIndex = 0;
                            }}
                            changeBackground();
                        }}).fail(function(xhr) {{
                            console.error('Delete failed:', xhr.responseText);
                            alert('Failed to delete image: ' + xhr.responseText);
                        }});
                    }});

                    // Keyboard controls for left and right arrow keys
                    $(document).keydown(function(event) {{
                        if (event.key === 'ArrowLeft') {{
                            $('#prev').click(); // Trigger previous button click
                        }} else if (event.key === 'ArrowRight') {{
                            $('#next').click(); // Trigger next button click
                        }}
                    }});
                }});
            </script>
        </body>
        </html>
        """

        # Send response
        self.send_response(200)
        self.send_header("Content-Type", "text/html")
        self.send_header("Access-Control-Allow-Origin", "*")
        self.end_headers()
        self.wfile.write(html.encode('utf-8'))

    def handle_delete(self):
        try:
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length).decode('utf-8')
            import urllib.parse
            data = urllib.parse.parse_qs(post_data)
            image_path = unquote(data.get('path', [''])[0])

            # Ensure path is within page* folders for safety
            if not any(image_path.startswith(f"{folder}/") for folder in FOLDERS):
                self.send_error(403, "Deletion restricted to page* folders")
                return

            # Convert URL path to filesystem path
            file_path = os.path.join(DIRECTORY, image_path.replace('/', os.sep))
            if os.path.exists(file_path):
                os.remove(file_path)
                self.send_response(200)
                self.send_header("Content-Type", "application/json")
                self.end_headers()
                self.wfile.write(json.dumps({"status": "success"}).encode('utf-8'))
            else:
                self.send_error(404, "Image not found")
        except Exception as e:
            self.send_error(500, f"Error deleting image: {str(e)}")

# Start the server
with socketserver.TCPServer(("", PORT), SlideshowHandler) as httpd:
    print(f"Serving at http://localhost:{PORT}")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped.")
        httpd.server_close()
