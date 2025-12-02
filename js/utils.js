// Utility functions for UMKM AI website

// Copy text to clipboard
function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            showToast('Berhasil disalin ke clipboard!');
        }).catch(() => {
            fallbackCopyTextToClipboard(text);
        });
    } else {
        fallbackCopyTextToClipboard(text);
    }
}

// Fallback copy function for older browsers
function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        showToast('Berhasil disalin ke clipboard!');
    } catch (err) {
        showToast('Gagal menyalin teks');
    }
    
    document.body.removeChild(textArea);
}

// Loading state helper
function showLoading(element, text = 'Memuat...') {
    if (element) {
        element.innerHTML = `<div class="loading">${text}</div>`;
    }
}

// Hide loading
function hideLoading(element, originalContent) {
    if (element) {
        element.innerHTML = originalContent;
    }
}