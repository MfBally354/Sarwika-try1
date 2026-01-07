/* ================================
   WARUNG SEMBAKO SARWIKA
   JavaScript untuk Fitur Pencarian
   ================================ */

/**
 * Inisialisasi fitur pencarian setelah DOM dimuat
 */
document.addEventListener('DOMContentLoaded', function() {
    // Ambil elemen-elemen yang diperlukan
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const productItems = document.querySelectorAll('.product-item');
    const categories = document.querySelectorAll('.category');
    
    /**
     * Fungsi untuk melakukan filter produk berdasarkan kata kunci
     */
    function filterProducts() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        
        // Jika input kosong, tampilkan semua produk
        if (searchTerm === '') {
            showAllProducts();
            return;
        }
        
        let hasVisibleProduct = false;
        
        // Loop setiap produk untuk pengecekan
        productItems.forEach(item => {
            const productName = item.querySelector('.product-name').textContent.toLowerCase();
            const productDesc = item.querySelector('.product-description').textContent.toLowerCase();
            
            // Cek apakah produk cocok dengan pencarian
            if (productName.includes(searchTerm) || productDesc.includes(searchTerm)) {
                item.style.display = 'flex';
                hasVisibleProduct = true;
            } else {
                item.style.display = 'none';
            }
        });
        
        // Tampilkan/sembunyikan kategori berdasarkan produk yang visible
        updateCategoryVisibility();
        
        // Tampilkan pesan jika tidak ada hasil
        if (!hasVisibleProduct) {
            showNoResultsMessage();
        } else {
            removeNoResultsMessage();
        }
    }
    
    /**
     * Fungsi untuk menampilkan semua produk
     */
    function showAllProducts() {
        productItems.forEach(item => {
            item.style.display = 'flex';
        });
        
        categories.forEach(category => {
            category.style.display = 'block';
        });
        
        removeNoResultsMessage();
    }
    
    /**
     * Fungsi untuk update visibility kategori
     * Sembunyikan kategori yang tidak memiliki produk visible
     */
    function updateCategoryVisibility() {
        categories.forEach(category => {
            const visibleProducts = category.querySelectorAll('.product-item[style="display: flex;"]').length;
            
            if (visibleProducts > 0) {
                category.style.display = 'block';
            } else {
                category.style.display = 'none';
            }
        });
    }
    
    /**
     * Fungsi untuk menampilkan pesan "tidak ada hasil"
     */
    function showNoResultsMessage() {
        // Cek apakah pesan sudah ada
        if (document.getElementById('noResultsMessage')) {
            return;
        }
        
        const container = document.querySelector('.container');
        const message = document.createElement('div');
        message.id = 'noResultsMessage';
        message.style.cssText = `
            background-color: #f8d7da;
            color: #721c24;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
            margin: 20px 0;
            border: 1px solid #f5c6cb;
        `;
        message.innerHTML = `
            <h3 style="margin: 0 0 10px 0;">Tidak Ada Hasil Ditemukan</h3>
            <p style="margin: 0;">Coba gunakan kata kunci lain atau kosongkan pencarian untuk melihat semua produk.</p>
        `;
        
        // Sisipkan setelah price-list-header
        const header = document.querySelector('.price-list-header');
        header.parentNode.insertBefore(message, header.nextSibling);
    }
    
    /**
     * Fungsi untuk menghapus pesan "tidak ada hasil"
     */
    function removeNoResultsMessage() {
        const message = document.getElementById('noResultsMessage');
        if (message) {
            message.remove();
        }
    }
    
    /**
     * Event listener untuk tombol cari
     */
    searchButton.addEventListener('click', filterProducts);
    
    /**
     * Event listener untuk input pencarian
     * - Enter: jalankan pencarian
     * - Kosong: tampilkan semua produk
     */
    searchInput.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            filterProducts();
        }
        
        // Jika input kosong, tampilkan semua produk
        if (searchInput.value === '') {
            showAllProducts();
        }
    });
    
    /**
     * Optional: Real-time search saat user mengetik
     * Uncomment kode di bawah jika ingin fitur real-time search
     */
    /*
    searchInput.addEventListener('input', function() {
        filterProducts();
    });
    */
    
    /**
     * Event listener untuk clear search saat klik X (jika ada)
     */
    searchInput.addEventListener('search', function() {
        if (searchInput.value === '') {
            showAllProducts();
        }
    });
    
    // Log untuk debugging
    console.log('Sarwika Search initialized');
    console.log(`Total products: ${productItems.length}`);
    console.log(`Total categories: ${categories.length}`);
});