window.onload = detectTheme()
function detectTheme() {
// This detects the device color mode when the user enters the webpage

    var theme = document.getElementById("theme");
    // Get the ID from the link we want to change

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        theme.href = '/link/to/darkmode/file'
        // Changing the file based on the color mode ("dark" file for dark-mode)
    
    }
    else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        theme.href = '/link/to/lightmode/file'
        // Changing the file based on the color mode ("light" file for light-mode)
            
    }
}


var switchLD = document.getElementById("switch");
// This is the ID from the switch button

switchLD.onclick = function toggleTheme() { 

    var theme = document.getElementById("theme");

    // Checks what color-mode file is used
    if (theme.getAttribute('href') == '/link/to/lightmode/file') { 
        theme.href = '/link/to/darkmode/file'
        // Changing the file from light to darkmode
    }
    else if (theme.getAttribute('href') == '/link/to/darkmode/file') {
        theme.href = '/link/to/lightmode/file'
        // Changing the file from dark to lightmode
    }
}  