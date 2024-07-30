import './App.css';

function App() {
  return (
    
<html>
<head>
    <link rel="stylesheet" href="styles.css" />
    <title>Page Title</title>
</head>
 
<body>
    <div class="open-modal-btn-wrapper">
        <button class="open-modal-btn">
            Open Modal
        </button>
    </div>
 
    <div class="modal-overlay hide">
        <div class="modal-wrapper">
            <div class="close-btn-wrapper">
                <button class="close-modal-btn">
                    Close
                </button>
            </div>
            <h1>GeeksforGeeks</h1>
            <div class="modal-content">
                Greetings from GeeksforGeeks
            </div>
        </div>
    </div>
    <script src="index.js"></script>
</body>
</html>
  );
}

export default App;
