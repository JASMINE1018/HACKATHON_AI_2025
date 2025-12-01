// Utility Functions

// Tampilkan toast notification
function showToast(message, duration = 3000) {
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');
  
  if (toastMessage) {
    toastMessage.textContent = message;
  }
  
  if (toast) {
    toast.classList.remove('hidden');
    
    setTimeout(() => {
      toast.classList.add('hidden');
    }, duration);
  }
}

// Copy ke clipboard
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast('✓ Berhasil disalin ke clipboard!');
  }).catch(err => {
    showToast('❌ Gagal menyalin, coba lagi');
    console.error('Copy error:', err);
  });
}

// Show loading spinner
function showLoading(container) {
  if (container) {
    container.innerHTML = `
      <div class="loading">
        <div class="spinner"></div>
        <p>AI sedang berpikir...</p>
      </div>
    `;
  }
}

// Format text untuk tampilan
function formatText(text, maxLength = null) {
  if (!text) return '';
  let result = text.trim();
  if (maxLength && result.length > maxLength) {
    result = result.substring(0, maxLength) + '...';
  }
  return result;
}
