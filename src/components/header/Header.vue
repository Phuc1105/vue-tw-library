<template>
  <header class="bg-[#ffc800] text-black">
    <div class="container mx-auto ">
      <!-- Top Bar -->
      <div class="flex justify-between items-center py-2 text-sm">
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
      <div class="grid grid-cols-12 items-center gap-4 py-3">
        <!-- Logo -->
        <div class="col-span-2 flex items-center">
          <img 
            src="https://s3-alpha-sig.figma.com/img/a008/619e/5b4ecc0fb285d6819eb204a9939eeafb?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=djsZmuCvOQ3KRfuVEXL5uHe9PoO~V8S~~hy1qn-qB7V-j9FxXEYqvqn5IvJ4VXwPjDcUPDhek1tJO3hea7h16ZkATRp0rGjU~s1ulORrerVpmngrQB8kRGEinWkH-Rmm-7ah4hEunvvPz5P8NUWxs61kgb7RLJ2vViiklwO3F~d569MxMmSxewEsR3D5gJqNosBhmApnzj4km2qt4OHo4yXupxH7mqPngDKDYT0LTIOe4EcoCdlhZ7blVI1QP8fHoOxvmQQ3Zai8GLcW62nA8gfbLBR-DhXC71G4dxyleTO3~2fkcd9bpM6Q0z~XBF8wXDwHcWExV7jvgROFtK6a2w__" 
            alt="Golden Bee Logo" 
            class="w-[217px] h-[82px]" 
          />
        </div>

        <!-- Search Bar -->
        <div class="col-span-6">
          <div class="relative">
            <div class="relative w-full">
              <button class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                <IconSearch class="w-5 h-5" />
              </button>
              <input
                type="text"
                placeholder="Mẫu giao diện, thiết kế website và bảng giá hosting"
                class="w-full py-2 px-4 pr-10 border rounded focus:outline-none"
              />
            </div>
            <div class="mt-2 text-sm text-black flex gap-4 whitespace-nowrap overflow-x-auto">
              <a href="#" class="hover:underline">mẫu web bán hàng</a>
              <a href="#" class="hover:underline">mẫu web thời trang</a>
              <a href="#" class="hover:underline">mẫu web mỹ phẩm</a>
              <a href="#" class="hover:underline">mẫu web nha khoa</a>
            </div>
          </div>
        </div>

        <!-- Cart & Login -->
        <div class="col-span-2 flex items-center gap-4">
          <button class="text-white flex items-center">
            <IconCart class="w-7 h-7" />
          </button>
          <div class="h-6 border-l border-white"></div>
          <button class="bg-white text-black w-[180px] h-[36px] rounded-full flex items-center gap-2 px-4 justify-center">
            <span class="font-semibold text-sm whitespace-nowrap">Đăng nhập/ Đăng ký</span>
          </button>
        </div>
      </div>

      <!-- Navigation Links -->
      <nav class="grid grid-cols-12 items-center bg-[#ffc800] py-2 text-black">
        <div class="col-span-2 relative">
          <button @click="toggleDropdown" class="bg-white text-black px-4 py-2 rounded flex items-center w-[187px] h-[36px] justify-between">
            <IconBars class="w-[20px] h-[20px]" />
            <span class="font-semibold text-sm flex-1 text-center">Danh mục</span>
            <IconarrowDown class="w-[20px] h-[20px]" />
          </button>
          <ul v-if="showDropdown" class="absolute top-full left-0 bg-white shadow-md w-full mt-2 rounded z-10">
            <li class="px-4 py-2 hover:bg-gray-100"><a href="#">Mẫu web bán hàng</a></li>
            <li class="px-4 py-2 hover:bg-gray-100"><a href="#">Mẫu web thời trang</a></li>
            <li class="px-4 py-2 hover:bg-gray-100"><a href="#">Mẫu web mỹ phẩm</a></li>
            <li class="px-4 py-2 hover:bg-gray-100"><a href="#">Mẫu web nha khoa</a></li>
          </ul>
        </div>

        <div class="col-span-8 flex gap-6">
          <a href="#" class="hover:underline">Trang chủ</a>
          <a href="#" class="hover:underline">Mẫu giao diện</a>
          <a href="#" class="hover:underline">Thiết kế web</a>
          <a href="#" class="hover:underline">Tin tức <span class="bg-green-500 text-xs px-1 rounded">NEW</span></a>
          <a href="#" class="hover:underline">Bảng hosting <span class="bg-red-500 text-xs px-1 rounded">HOT</span></a>
          <a href="#" class="hover:underline">Liên hệ</a>
          <a href="#" class="hover:underline">Tuyển dụng</a>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import IconarrowDown from '@/components/icons/Iconarrow-down.vue';
import IconBars from '@/components/icons/IconBars.vue';
import IconSearch from '@/components/icons/IconSearch.vue';
import IconCart from '@/components/icons/IconCart.vue';

const showDropdown = ref(false);
const toggleDropdown = () => {
showDropdown.value = !showDropdown.value;
};
</script>

<style scoped>
</style>
