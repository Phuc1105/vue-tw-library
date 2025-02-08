<script setup lang="ts">
import IconFacebook from '../icons/IconFacebook.vue';
import IconInsta from '../icons/IconInsta.vue';
import IconPinterest from '../icons/IconPinterest.vue';
import IconTikTok from '../icons/IconTikTok.vue';
import IconYoutube from '../icons/IconYoutube.vue';
</script>

<template>
  <head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
  </head>

  <!-- Header -->
  <header class="bg-white py-4 shadow-md">
    <div class="container mx-auto flex flex-col md:flex-row justify-between items-center">
      <!-- Logo -->
      <div class="mb-4 md:mb-0">
        <a href="">
          <img src="/src/assets/images/5b4ecc0fb285d6819eb204a9939eeafb.png" alt="Golden Bee Logo" class="h-16 w-auto">
        </a>
      </div>

      <!-- Nav Menu -->
      <nav>
        <ul class="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 text-gray-700">
          <li><a href="#" class="hover:text-yellow-500 transition">TRANG CHỦ</a></li>
          <li><a href="#" class="hover:text-yellow-500 transition">GIÀY NAM</a></li>
          <li><a href="#" class="hover:text-yellow-500 transition">GIÀY NỮ</a></li>
          <li><a href="#" class="hover:text-yellow-500 transition">SẢN PHẨM BÁN CHẠY</a></li>
          <li><a href="#" class="hover:text-yellow-500 transition">TIN TỨC</a></li>
          <li><a href="#" class="hover:text-yellow-500 transition">LIÊN HỆ</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <!-- Footer -->
  <footer class="bg-gray-100 py-8">
    <div class="container mx-auto grid grid-cols-1 gap-12 md:grid-cols-3">
      <!-- Đăng ký nhận tin -->
      <div>
        <h3 class="text-black font-semibold mb-4">Đăng ký nhận tin</h3>
        <p class="text-gray-600 mb-6">Nhận thông tin mới nhất về sản phẩm và ưu đãi đặc biệt</p>
        <form class="flex flex-col md:flex-row mb-6">
          <input type="email" placeholder="Nhập email của bạn" class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none w-full mb-2 md:mb-0 md:mr-2">
          <button class="bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-yellow-600 transition">Đăng ký</button>
        </form>

        <p class="text-black font-semibold mb-3">HỖ TRỢ KHÁCH HÀNG</p>
        <div class="flex space-x-6">
          <IconFacebook />
          <IconPinterest />
          <IconYoutube />
          <IconInsta />
          <IconTikTok />
        </div>
      </div>

      <!-- Thông tin công ty -->
      <div>
        <h3 class="text-black font-semibold mb-4">CÔNG TY TNHH GIẢI PHÁP CÔNG NGHỆ THÔNG TIN GOLDEN BEE</h3>
        <p class="text-gray-600 mb-2">Mã số thuế: 1801764908</p>
        <p class="text-gray-600 mb-2">Địa chỉ: Trụ sở 149/20 Đường 30/4, Phường Xuân Khánh, Quận Ninh Kiều, Cần Thơ</p>
        <p class="text-gray-600 mb-2">Điện thoại: 0973747609</p>
        <p class="text-gray-600 mb-2">Email: <a href="mailto:support@goldenbeeltd.vn" class="text-blue-500">support@goldenbeeltd.vn</a></p>
        <p class="text-gray-600">Website: <a href="https://goldenbeeltd.vn" class="text-blue-500" target="_blank" rel="noopener noreferrer">https://goldenbeeltd.vn</a></p>
      </div>

      <!-- Fanpage -->
      <div>
        <h3 class="text-black font-semibold mb-4">Fanpage Facebook</h3>
        <div class="bg-gray-200 w-full h-60 mb-1">
          <img src="/src/assets/images/83dc19275851b1c3f1235e8ef01f0d6f.png" alt="Fanpage Facebook" class="w-full h-full object-cover">
        </div>
      </div>
    </div>

    <!-- Footer bottom -->
    <div class="bg-yellow-500 text-white text-center py-4 mt-10">
      <p>© 2025 CÔNG TY TNHH GIẢI PHÁP CÔNG NGHỆ THÔNG TIN GOLDEN BEE. All Rights Reserved</p>
    </div>
  </footer>
</template>
