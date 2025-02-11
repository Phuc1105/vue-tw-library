<template>
  <header class="bg-[#ffc800] text-black">
    <div class="container mx-auto px-4">
      <!-- Top Bar -->
      <div class="hidden md:flex justify-between items-center py-2 text-sm">
        <div class="flex gap-4">
          <span>📞 Số điện thoại: 0973 747 609</span>
          <span>| CSKH CT: 0782 82 8843</span>
          <span>| CSKH HCM: 0938 461 136</span>
        </div>
        <div class="flex gap-3">
          <a href="#" class="text-black"><i class="fab fa-facebook"></i></a>
          <a href="#" class="text-black"><i class="fab fa-twitter"></i></a>
        </div>
      </div>

      <!-- Main Navbar -->
      <div class="flex justify-between items-center py-3">
        <!-- Logo -->
        <div class="flex items-center">
          <img
            src="https://s3-alpha-sig.figma.com/img/a008/619e/5b4ecc0fb285d6819eb204a9939eeafb?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=djsZmuCvOQ3KRfuVEXL5uHe9PoO~V8S~~hy1qn-qB7V-j9FxXEYqvqn5IvJ4VXwPjDcUPDhek1tJO3hea7h16ZkATRp0rGjU~s1ulORrerVpmngrQB8kRGEinWkH-Rmm-7ah4hEunvvPz5P8NUWxs61kgb7RLJ2vViiklwO3F~d569MxMmSxewEsR3D5gJqNosBhmApnzj4km2qt4OHo4yXupxH7mqPngDKDYT0LTIOe4EcoCdlhZ7blVI1QP8fHoOxvmQQ3Zai8GLcW62nA8gfbLBR-DhXC71G4dxyleTO3~2fkcd9bpM6Q0z~XBF8wXDwHcWExV7jvgROFtK6a2w__"
            alt="Golden Bee Logo" class="w-[150px] md:w-[217px] h-auto" />
        </div>

        <!-- Mobile Menu Button -->
        <button @click="toggleMobileMenu" class="md:hidden text-black text-2xl">
          ☰
        </button>

        <!-- Desktop Search Bar & Cart/Login -->
        <div class="hidden md:flex items-center gap-4 flex-grow justify-center">
          <div className="relative w-2/3">
            <div className="relative w-full">
              <input type="text" placeholder="Mẫu giao diện, thiết kế website và bảng giá hosting"
                className="w-full py-2 px-4 pl-10 border rounded focus:outline-none" />
              <button className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                <IconSearch className="w-5 h-5" />
              </button>
            </div>

            <div className="flex gap-x-4 mt-2 text-sm font-semibold text-black">
              <div>mẫu web nha khoa</div>
              <div>mẫu web bán hàng</div>
              <div>mẫu web mỹ phẩm</div>
              <div>mẫu web thời trang</div>
              <div>mẫu web thực phẩm</div>
            </div>

          </div>

          <button class="text-black">
            <IconCart class="w-7 h-7" />
          </button>
          <button
            class="bg-white text-black w-[180px] h-[36px] rounded-full flex items-center gap-2 px-4 justify-center">
            <span class="font-semibold text-sm">Đăng nhập/ Đăng ký</span>
          </button>
        </div>
      </div>

      <!-- Navigation Links -->
      <nav class="hidden md:flex justify-between items-center bg-[#ffc800] py-2 text-black">
        <div>
          <button class="bg-white text-black px-4 py-2 rounded flex items-center gap-2">
            <IconBars class="w-[20px] h-[20px]" />
            <span class="font-semibold text-sm">Danh mục</span>
            <IconarrowDown class="w-[20px] h-[20px]" />
          </button>
        </div>
        <div class="flex gap-6">
          <a href="#" class="hover:underline">Trang chủ</a>
          <a href="#" class="hover:underline">Mẫu giao diện</a>
          <a href="#" class="hover:underline">Thiết kế web</a>
          <a href="#" class="hover:underline">Tin tức <span class="bg-green-500 text-xs px-1 rounded">NEW</span></a>
          <a href="#" class="hover:underline">Bảng hosting <span class="bg-red-500 text-xs px-1 rounded">HOT</span></a>
          <a href="#" class="hover:underline">Liên hệ</a>
          <a href="#" class="hover:underline">Tuyển dụng</a>
        </div>
        <button class="bg-white text-black px-4 py-2 rounded-[50px]">Liên hệ</button>

      </nav>

      <!-- Mobile Navigation -->
      <div v-if="showMobileMenu" class="md:hidden bg-[#ffc800] p-4">
        <a href="#" class="block py-2 border-b">Trang chủ</a>
        <a href="#" class="block py-2 border-b">Mẫu giao diện</a>
        <a href="#" class="block py-2 border-b">Thiết kế web</a>
        <a href="#" class="block py-2 border-b">Tin tức</a>
        <a href="#" class="block py-2 border-b">Bảng hosting</a>
        <a href="#" class="block py-2 border-b">Liên hệ</a>
        <a href="#" class="block py-2">Tuyển dụng</a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import IconSearch from '@/components/icons/IconSearch.vue';
import IconCart from '@/components/icons/IconCart.vue';
import IconBars from '@/components/icons/IconBars.vue';
import IconarrowDown from '@/components/icons/Iconarrow-down.vue';

const showMobileMenu = ref(false);
const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value;
};
</script>

<style scoped></style>