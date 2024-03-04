import React from 'react' 
import './tracking.css';
function Tacking() {
  return (
    <div className='body' >
    <div class="container">
    <header>
        <h1>File Tracking System</h1>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="#">Files</a></li>
                <li><a href="#">Reports</a></li>
                <li><a href="#">Settings</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <section class="file-status">
            <h2>File Status</h2>
            <div class="file-status-grid">
                <div class="file-status-item">
                    <h3>Total Files</h3>
                    <p>100</p>
                </div>
                <div class="file-status-item">
                    <h3>Files Pending</h3>
                    <p>20</p>
                </div>
                <div class="file-status-item">
                    <h3>Files Completed</h3>
                    <p>80</p>
                </div>
            </div>
        </section>
        <section class="file-list">
            <h2>Recent Files</h2>
            <ul>
                <li>File 1</li>
                <li>File 2</li>
                <li>File 3</li>
                <li>File 4</li>
                <li>File 5</li>
            </ul>
        </section>
    </main>
    <footer>
        <p>&copy; 2024 File Tracking System</p>
    </footer>
</div>
</div>
  )
}

export default Tacking
