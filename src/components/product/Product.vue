<template>
    <div class="container mx-auto p-4 grid grid-cols-12 gap-4">
      <!-- Bộ lọc bên trái -->
      <aside class="col-span-3 bg-while-100 p-4 rounded-lg">
        <div class="border rounded p-4 w-64">
  <h2 class="font-bold text-lg mb-2 bg-[#F2F2F2] p-2 rounded">Xe đạp phổ thông, Mini</h2>
  <h3 class="font-bold text-base mt-4 mb-2">Xe đạp phổ thông, Mini</h3>
  <hr>

</div>
        <div class="border rounded p-4 w-64">
  <h2 class="font-bold text-lg mb-2 bg-[#FFC800] p-2 rounded">Lọc sản phẩm</h2>
  <h3 class="font-bold text-base mt-4 mb-2">Giá</h3>
  <hr>
  <ul class="space-y-2">
    <li>
      <label class="flex items-center space-x-2">
        <input type="radio" name="price" />
        <span>Tất cả</span>
      </label>
    </li>
    <li>
      <label class="flex items-center space-x-2">
        <input type="radio" name="price" />
        <span>Dưới 1 triệu</span>
      </label>
    </li>
    <li>
      <label class="flex items-center space-x-2">
        <input type="radio" name="price" />
        <span>Từ 1 triệu đến 5 triệu</span>
      </label>
    </li>
    <li>
      <label class="flex items-center space-x-2">
        <input type="radio" name="price" />
        <span>Từ 5 triệu đến 10 triệu</span>
      </label>
    </li>
    <li>
      <label class="flex items-center space-x-2">
        <input type="radio" name="price" />
        <span>Từ 10 triệu đến 15 triệu</span>
      </label>
    </li>
    <li>
      <label class="flex items-center space-x-2">
        <input type="radio" name="price" />
        <span>Trên 15 triệu</span>
      </label>
    </li>
  </ul>
</div>
<div class="border rounded-lg p-4">
  <h2 class="font-bold text-lg mt-6 mb-2 bg-[#FFC800] p-2 rounded ">Sản phẩm nổi bật</h2>

  <div class="space-y-4">
    <div class="flex items-center space-x-2 border-b pb-2">
      <img src="https://s3-alpha-sig.figma.com/img/2ea9/da52/821005cba2f42ffa2b56694971d42538?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NfDU1qDc31q3PyCYyk11UpkXx13RhxIXDs13hlpnyKz9nwisirNOsVJzBlTHbTrilnBpb~teNW57LWofuVFQq8jmL7K8RbrUx1WIGj4ZM8lLo4yduAd1-3NBKCqc2LxJAKwd76le8yEbrQjdcx7WeTxjW6Zv6WMEhFTPz37YmB~~8K1rCjfedrPGl4U-cUZammTUsIg9qBtm8~PGs43HLmgDYlE61ryf7xIdY0dDLca7h2eF2GWiUk3bwqhGV7L6z-0hPnewdufsf9OCPdEz8v4ZrEOHrJGe6q5Gr9uxKB97jaJf1vqnjvy-16tvcauaew2FYhYZIRGgTOLh~6Wi~A__" class="w-12 h-12 object-cover" />
      <div class="flex-1">
        <p class="text-sm font-semibold">Xe đạp thể thao</p>
        <div class="flex items-center space-x-2">
          <p class="text-gray-500 text-sm line-through">7.500.000đ</p>
          <p class="text-red-500 text-sm font-semibold">6.000.000đ</p>
        </div>
      </div>
    </div>
    <div class="flex items-center space-x-2 border-b pb-2">
      <img src="https://s3-alpha-sig.figma.com/img/2ea9/da52/821005cba2f42ffa2b56694971d42538?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NfDU1qDc31q3PyCYyk11UpkXx13RhxIXDs13hlpnyKz9nwisirNOsVJzBlTHbTrilnBpb~teNW57LWofuVFQq8jmL7K8RbrUx1WIGj4ZM8lLo4yduAd1-3NBKCqc2LxJAKwd76le8yEbrQjdcx7WeTxjW6Zv6WMEhFTPz37YmB~~8K1rCjfedrPGl4U-cUZammTUsIg9qBtm8~PGs43HLmgDYlE61ryf7xIdY0dDLca7h2eF2GWiUk3bwqhGV7L6z-0hPnewdufsf9OCPdEz8v4ZrEOHrJGe6q5Gr9uxKB97jaJf1vqnjvy-16tvcauaew2FYhYZIRGgTOLh~6Wi~A__" class="w-12 h-12 object-cover" />
      <div class="flex-1">
        <p class="text-sm font-semibold">Xe đạp thể thao</p>
        <div class="flex items-center space-x-2">
          <p class="text-gray-500 text-sm line-through">7.500.000đ</p>
          <p class="text-red-500 text-sm font-semibold">6.000.000đ</p>
        </div>
      </div>
    </div>
    <div class="flex items-center space-x-2 border-b pb-2">
      <img src="https://s3-alpha-sig.figma.com/img/2ea9/da52/821005cba2f42ffa2b56694971d42538?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NfDU1qDc31q3PyCYyk11UpkXx13RhxIXDs13hlpnyKz9nwisirNOsVJzBlTHbTrilnBpb~teNW57LWofuVFQq8jmL7K8RbrUx1WIGj4ZM8lLo4yduAd1-3NBKCqc2LxJAKwd76le8yEbrQjdcx7WeTxjW6Zv6WMEhFTPz37YmB~~8K1rCjfedrPGl4U-cUZammTUsIg9qBtm8~PGs43HLmgDYlE61ryf7xIdY0dDLca7h2eF2GWiUk3bwqhGV7L6z-0hPnewdufsf9OCPdEz8v4ZrEOHrJGe6q5Gr9uxKB97jaJf1vqnjvy-16tvcauaew2FYhYZIRGgTOLh~6Wi~A__" class="w-12 h-12 object-cover" />
      <div class="flex-1">
        <p class="text-sm font-semibold">Xe đạp thể thao</p>
        <div class="flex items-center space-x-2">
          <p class="text-gray-500 text-sm line-through">7.500.000đ</p>
          <p class="text-red-500 text-sm font-semibold">6.000.000đ</p>
        </div>
      </div>
    </div>
    <div class="flex items-center space-x-2 border-b pb-2">
      <img src="https://s3-alpha-sig.figma.com/img/2ea9/da52/821005cba2f42ffa2b56694971d42538?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NfDU1qDc31q3PyCYyk11UpkXx13RhxIXDs13hlpnyKz9nwisirNOsVJzBlTHbTrilnBpb~teNW57LWofuVFQq8jmL7K8RbrUx1WIGj4ZM8lLo4yduAd1-3NBKCqc2LxJAKwd76le8yEbrQjdcx7WeTxjW6Zv6WMEhFTPz37YmB~~8K1rCjfedrPGl4U-cUZammTUsIg9qBtm8~PGs43HLmgDYlE61ryf7xIdY0dDLca7h2eF2GWiUk3bwqhGV7L6z-0hPnewdufsf9OCPdEz8v4ZrEOHrJGe6q5Gr9uxKB97jaJf1vqnjvy-16tvcauaew2FYhYZIRGgTOLh~6Wi~A__" class="w-12 h-12 object-cover" />
      <div class="flex-1">
        <p class="text-sm font-semibold">Xe đạp thể thao</p>
        <div class="flex items-center space-x-2">
          <p class="text-gray-500 text-sm line-through">7.500.000đ</p>
          <p class="text-red-500 text-sm font-semibold">6.000.000đ</p>
        </div>
      </div>
    </div>
    <div class="flex items-center space-x-2 border-b pb-2">
      <img src="https://s3-alpha-sig.figma.com/img/2ea9/da52/821005cba2f42ffa2b56694971d42538?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NfDU1qDc31q3PyCYyk11UpkXx13RhxIXDs13hlpnyKz9nwisirNOsVJzBlTHbTrilnBpb~teNW57LWofuVFQq8jmL7K8RbrUx1WIGj4ZM8lLo4yduAd1-3NBKCqc2LxJAKwd76le8yEbrQjdcx7WeTxjW6Zv6WMEhFTPz37YmB~~8K1rCjfedrPGl4U-cUZammTUsIg9qBtm8~PGs43HLmgDYlE61ryf7xIdY0dDLca7h2eF2GWiUk3bwqhGV7L6z-0hPnewdufsf9OCPdEz8v4ZrEOHrJGe6q5Gr9uxKB97jaJf1vqnjvy-16tvcauaew2FYhYZIRGgTOLh~6Wi~A__" class="w-12 h-12 object-cover" />
      <div class="flex-1">
        <p class="text-sm font-semibold">Xe đạp thể thao</p>
        <div class="flex items-center space-x-2">
          <p class="text-gray-500 text-sm line-through">7.500.000đ</p>
          <p class="text-red-500 text-sm font-semibold">6.000.000đ</p>
        </div>
      </div>
    </div>
    <div class="flex items-center space-x-2 border-b pb-2">
      <img src="https://s3-alpha-sig.figma.com/img/2ea9/da52/821005cba2f42ffa2b56694971d42538?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NfDU1qDc31q3PyCYyk11UpkXx13RhxIXDs13hlpnyKz9nwisirNOsVJzBlTHbTrilnBpb~teNW57LWofuVFQq8jmL7K8RbrUx1WIGj4ZM8lLo4yduAd1-3NBKCqc2LxJAKwd76le8yEbrQjdcx7WeTxjW6Zv6WMEhFTPz37YmB~~8K1rCjfedrPGl4U-cUZammTUsIg9qBtm8~PGs43HLmgDYlE61ryf7xIdY0dDLca7h2eF2GWiUk3bwqhGV7L6z-0hPnewdufsf9OCPdEz8v4ZrEOHrJGe6q5Gr9uxKB97jaJf1vqnjvy-16tvcauaew2FYhYZIRGgTOLh~6Wi~A__" class="w-12 h-12 object-cover" />
      <div class="flex-1">
        <p class="text-sm font-semibold">Xe đạp thể thao</p>
        <div class="flex items-center space-x-2">
          <p class="text-gray-500 text-sm line-through">7.500.000đ</p>
          <p class="text-red-500 text-sm font-semibold">6.000.000đ</p>
        </div>
      </div>
    </div>
    <div class="flex items-center space-x-2 border-b pb-2">
      <img src="https://s3-alpha-sig.figma.com/img/2ea9/da52/821005cba2f42ffa2b56694971d42538?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NfDU1qDc31q3PyCYyk11UpkXx13RhxIXDs13hlpnyKz9nwisirNOsVJzBlTHbTrilnBpb~teNW57LWofuVFQq8jmL7K8RbrUx1WIGj4ZM8lLo4yduAd1-3NBKCqc2LxJAKwd76le8yEbrQjdcx7WeTxjW6Zv6WMEhFTPz37YmB~~8K1rCjfedrPGl4U-cUZammTUsIg9qBtm8~PGs43HLmgDYlE61ryf7xIdY0dDLca7h2eF2GWiUk3bwqhGV7L6z-0hPnewdufsf9OCPdEz8v4ZrEOHrJGe6q5Gr9uxKB97jaJf1vqnjvy-16tvcauaew2FYhYZIRGgTOLh~6Wi~A__" class="w-12 h-12 object-cover" />
      <div class="flex-1">
        <p class="text-sm font-semibold">Xe đạp thể thao</p>
        <div class="flex items-center space-x-2">
          <p class="text-gray-500 text-sm line-through">7.500.000đ</p>
          <p class="text-red-500 text-sm font-semibold">6.000.000đ</p>
        </div>
      </div>
    </div>
    <div class="flex items-center space-x-2 border-b pb-2">
      <img src="https://s3-alpha-sig.figma.com/img/2ea9/da52/821005cba2f42ffa2b56694971d42538?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NfDU1qDc31q3PyCYyk11UpkXx13RhxIXDs13hlpnyKz9nwisirNOsVJzBlTHbTrilnBpb~teNW57LWofuVFQq8jmL7K8RbrUx1WIGj4ZM8lLo4yduAd1-3NBKCqc2LxJAKwd76le8yEbrQjdcx7WeTxjW6Zv6WMEhFTPz37YmB~~8K1rCjfedrPGl4U-cUZammTUsIg9qBtm8~PGs43HLmgDYlE61ryf7xIdY0dDLca7h2eF2GWiUk3bwqhGV7L6z-0hPnewdufsf9OCPdEz8v4ZrEOHrJGe6q5Gr9uxKB97jaJf1vqnjvy-16tvcauaew2FYhYZIRGgTOLh~6Wi~A__" class="w-12 h-12 object-cover" />
      <div class="flex-1">
        <p class="text-sm font-semibold">Xe đạp thể thao</p>
        <div class="flex items-center space-x-2">
          <p class="text-gray-500 text-sm line-through">7.500.000đ</p>
          <p class="text-red-500 text-sm font-semibold">6.000.000đ</p>
        </div>
      </div>
    </div>
    <!-- Các sản phẩm khác giữ nguyên cấu trúc như trên -->
  </div>
</div>


      </aside>
      
      <!-- Danh sách sản phẩm -->
      <main class="col-span-9">
        <div class="flex justify-between mb-4">
            <div class="text-center">
  <!-- Tiêu đề -->
  <h1 class="text-xl font-bold mb-2">XE ĐẠP</h1>

  <!-- Nút icon nằm dưới tiêu đề -->
  <div class="flex justify-center space-x-4 bg-[#FFC800] p-2 rounded w-max mx-auto">
    <!-- Icon dạng lưới -->
    <button class="p-2  rounded">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h4v4H4V6zm6 0h4v4h-4V6zm6 0h4v4h-4V6zM4 14h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4z"/>
      </svg>
    </button>

    <!-- Icon dạng danh sách -->
    <button class="p-2  rounded">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
      </svg>
    </button>
  </div>
</div>

        
        </div>
        <div class="flex justify-end space-x-4">
  <select class="border p-2 rounded">
    <option>Hiển thị: 12</option>
    <option>Hiển thị: 24</option>
  </select>
  <select class="border p-2 rounded">
    <option>Sắp xếp: Mặc định</option>
    <option>Giá tăng dần</option>
  </select>
</div>

        
        <div class="container mx-auto py-8">
      <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
        <!-- Lặp qua danh sách sản phẩm -->
        <div
          v-for="(product, index) in products"
          :key="index"
          class="relative border p-3 rounded-lg shadow-md text-center w-full"
        >
          <!-- Nhãn giá giảm -->
          <span
            v-if="product.discountPercent"
            class="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded"
          >
            -{{ product.discountPercent }}%
          </span>
  
          <img
            :src="product.image"
            alt="Product Image"
            class="rounded-lg w-full h-40 object-cover mb-4"
          />
          <h3 class="text-lg font-semibold">{{ product.title }}</h3>
          <p class="text-yellow-500 text-sm mt-5 text-left">⭐⭐⭐⭐⭐ ({{ product.reviews }} đánh giá)</p>
  
          <div class="flex items-center space-x-4">
  <p class="mt-2 text-sm line-through text-gray-400">
    {{ product.originalPrice }}đ
  </p>
  <p class="text-[#af1313] font-bold text-lg">
    {{ product.salePrice }}đ
  </p>
</div>

  
          <div class="mt-4 flex items-center justify-between">
            <p class="text-[#096246] text-sm flex items-center font-bold">
  <!-- Gọi component icon -->
  <Box class="w-6 h-6 mr-2 text-[#096246]" />
  Còn hàng
</p>


            <button class="bg-yellow-500 text-white px-4 py-2 rounded-[50px] hover:bg-yellow-600">
              Xem chi tiết
            </button>
          </div>
        </div>
      </div>
    </div>

      </main>
    </div>
  </template>
  
  <script>
  import Box from '@/components/icons/IconBox.vue';
  export default {
    name: "ProductGrid",
    components: {
        Box,
  },
    data() {
      return {
        products: [
        {
          image: "https://s3-alpha-sig.figma.com/img/2ea9/da52/821005cba2f42ffa2b56694971d42538?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NfDU1qDc31q3PyCYyk11UpkXx13RhxIXDs13hlpnyKz9nwisirNOsVJzBlTHbTrilnBpb~teNW57LWofuVFQq8jmL7K8RbrUx1WIGj4ZM8lLo4yduAd1-3NBKCqc2LxJAKwd76le8yEbrQjdcx7WeTxjW6Zv6WMEhFTPz37YmB~~8K1rCjfedrPGl4U-cUZammTUsIg9qBtm8~PGs43HLmgDYlE61ryf7xIdY0dDLca7h2eF2GWiUk3bwqhGV7L6z-0hPnewdufsf9OCPdEz8v4ZrEOHrJGe6q5Gr9uxKB97jaJf1vqnjvy-16tvcauaew2FYhYZIRGgTOLh~6Wi~A__",
          title: "Xe đạp trẻ em Xaming mẫu mới XAMING03",
          reviews: 8,
          originalPrice: "1,080,000",
          salePrice: "890,000",
          discountPercent: 18,
        },
        {
          image: "https://s3-alpha-sig.figma.com/img/2ea9/da52/821005cba2f42ffa2b56694971d42538?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NfDU1qDc31q3PyCYyk11UpkXx13RhxIXDs13hlpnyKz9nwisirNOsVJzBlTHbTrilnBpb~teNW57LWofuVFQq8jmL7K8RbrUx1WIGj4ZM8lLo4yduAd1-3NBKCqc2LxJAKwd76le8yEbrQjdcx7WeTxjW6Zv6WMEhFTPz37YmB~~8K1rCjfedrPGl4U-cUZammTUsIg9qBtm8~PGs43HLmgDYlE61ryf7xIdY0dDLca7h2eF2GWiUk3bwqhGV7L6z-0hPnewdufsf9OCPdEz8v4ZrEOHrJGe6q5Gr9uxKB97jaJf1vqnjvy-16tvcauaew2FYhYZIRGgTOLh~6Wi~A__",
          title: "Xe đạp trẻ em Xaming mẫu mới XAMING03",
          reviews: 8,
          originalPrice: "1,080,000",
          salePrice: "890,000",
          discountPercent: 18,
        },
        {
          image: "https://s3-alpha-sig.figma.com/img/2ea9/da52/821005cba2f42ffa2b56694971d42538?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NfDU1qDc31q3PyCYyk11UpkXx13RhxIXDs13hlpnyKz9nwisirNOsVJzBlTHbTrilnBpb~teNW57LWofuVFQq8jmL7K8RbrUx1WIGj4ZM8lLo4yduAd1-3NBKCqc2LxJAKwd76le8yEbrQjdcx7WeTxjW6Zv6WMEhFTPz37YmB~~8K1rCjfedrPGl4U-cUZammTUsIg9qBtm8~PGs43HLmgDYlE61ryf7xIdY0dDLca7h2eF2GWiUk3bwqhGV7L6z-0hPnewdufsf9OCPdEz8v4ZrEOHrJGe6q5Gr9uxKB97jaJf1vqnjvy-16tvcauaew2FYhYZIRGgTOLh~6Wi~A__",
          title: "Xe đạp trẻ em Xaming mẫu mới XAMING03",
          reviews: 8,
          originalPrice: "1,080,000",
          salePrice: "890,000",
          discountPercent: 18,
        },
        {
          image: "https://s3-alpha-sig.figma.com/img/2ea9/da52/821005cba2f42ffa2b56694971d42538?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NfDU1qDc31q3PyCYyk11UpkXx13RhxIXDs13hlpnyKz9nwisirNOsVJzBlTHbTrilnBpb~teNW57LWofuVFQq8jmL7K8RbrUx1WIGj4ZM8lLo4yduAd1-3NBKCqc2LxJAKwd76le8yEbrQjdcx7WeTxjW6Zv6WMEhFTPz37YmB~~8K1rCjfedrPGl4U-cUZammTUsIg9qBtm8~PGs43HLmgDYlE61ryf7xIdY0dDLca7h2eF2GWiUk3bwqhGV7L6z-0hPnewdufsf9OCPdEz8v4ZrEOHrJGe6q5Gr9uxKB97jaJf1vqnjvy-16tvcauaew2FYhYZIRGgTOLh~6Wi~A__",
          title: "Xe đạp trẻ em Xaming mẫu mới XAMING03",
          reviews: 8,
          originalPrice: "1,080,000",
          salePrice: "890,000",
          discountPercent: 18,
        },
        {
          image: "https://s3-alpha-sig.figma.com/img/2ea9/da52/821005cba2f42ffa2b56694971d42538?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NfDU1qDc31q3PyCYyk11UpkXx13RhxIXDs13hlpnyKz9nwisirNOsVJzBlTHbTrilnBpb~teNW57LWofuVFQq8jmL7K8RbrUx1WIGj4ZM8lLo4yduAd1-3NBKCqc2LxJAKwd76le8yEbrQjdcx7WeTxjW6Zv6WMEhFTPz37YmB~~8K1rCjfedrPGl4U-cUZammTUsIg9qBtm8~PGs43HLmgDYlE61ryf7xIdY0dDLca7h2eF2GWiUk3bwqhGV7L6z-0hPnewdufsf9OCPdEz8v4ZrEOHrJGe6q5Gr9uxKB97jaJf1vqnjvy-16tvcauaew2FYhYZIRGgTOLh~6Wi~A__",
          title: "Xe đạp trẻ em Xaming mẫu mới XAMING03",
          reviews: 8,
          originalPrice: "1,080,000",
          salePrice: "890,000",
          discountPercent: 18,
        },
        {
          image: "https://s3-alpha-sig.figma.com/img/2ea9/da52/821005cba2f42ffa2b56694971d42538?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NfDU1qDc31q3PyCYyk11UpkXx13RhxIXDs13hlpnyKz9nwisirNOsVJzBlTHbTrilnBpb~teNW57LWofuVFQq8jmL7K8RbrUx1WIGj4ZM8lLo4yduAd1-3NBKCqc2LxJAKwd76le8yEbrQjdcx7WeTxjW6Zv6WMEhFTPz37YmB~~8K1rCjfedrPGl4U-cUZammTUsIg9qBtm8~PGs43HLmgDYlE61ryf7xIdY0dDLca7h2eF2GWiUk3bwqhGV7L6z-0hPnewdufsf9OCPdEz8v4ZrEOHrJGe6q5Gr9uxKB97jaJf1vqnjvy-16tvcauaew2FYhYZIRGgTOLh~6Wi~A__",
          title: "Xe đạp trẻ em Xaming mẫu mới XAMING03",
          reviews: 8,
          originalPrice: "1,080,000",
          salePrice: "890,000",
          discountPercent: 18,
        },
        {
          image: "https://s3-alpha-sig.figma.com/img/2ea9/da52/821005cba2f42ffa2b56694971d42538?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NfDU1qDc31q3PyCYyk11UpkXx13RhxIXDs13hlpnyKz9nwisirNOsVJzBlTHbTrilnBpb~teNW57LWofuVFQq8jmL7K8RbrUx1WIGj4ZM8lLo4yduAd1-3NBKCqc2LxJAKwd76le8yEbrQjdcx7WeTxjW6Zv6WMEhFTPz37YmB~~8K1rCjfedrPGl4U-cUZammTUsIg9qBtm8~PGs43HLmgDYlE61ryf7xIdY0dDLca7h2eF2GWiUk3bwqhGV7L6z-0hPnewdufsf9OCPdEz8v4ZrEOHrJGe6q5Gr9uxKB97jaJf1vqnjvy-16tvcauaew2FYhYZIRGgTOLh~6Wi~A__",
          title: "Xe đạp trẻ em Xaming mẫu mới XAMING03",
          reviews: 8,
          originalPrice: "1,080,000",
          salePrice: "890,000",
          discountPercent: 18,
        },
        {
          image: "https://s3-alpha-sig.figma.com/img/2ea9/da52/821005cba2f42ffa2b56694971d42538?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NfDU1qDc31q3PyCYyk11UpkXx13RhxIXDs13hlpnyKz9nwisirNOsVJzBlTHbTrilnBpb~teNW57LWofuVFQq8jmL7K8RbrUx1WIGj4ZM8lLo4yduAd1-3NBKCqc2LxJAKwd76le8yEbrQjdcx7WeTxjW6Zv6WMEhFTPz37YmB~~8K1rCjfedrPGl4U-cUZammTUsIg9qBtm8~PGs43HLmgDYlE61ryf7xIdY0dDLca7h2eF2GWiUk3bwqhGV7L6z-0hPnewdufsf9OCPdEz8v4ZrEOHrJGe6q5Gr9uxKB97jaJf1vqnjvy-16tvcauaew2FYhYZIRGgTOLh~6Wi~A__",
          title: "Xe đạp trẻ em Xaming mẫu mới XAMING03",
          reviews: 8,
          originalPrice: "1,080,000",
          salePrice: "890,000",
          discountPercent: 18,
        },
        {
          image: "https://s3-alpha-sig.figma.com/img/2ea9/da52/821005cba2f42ffa2b56694971d42538?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NfDU1qDc31q3PyCYyk11UpkXx13RhxIXDs13hlpnyKz9nwisirNOsVJzBlTHbTrilnBpb~teNW57LWofuVFQq8jmL7K8RbrUx1WIGj4ZM8lLo4yduAd1-3NBKCqc2LxJAKwd76le8yEbrQjdcx7WeTxjW6Zv6WMEhFTPz37YmB~~8K1rCjfedrPGl4U-cUZammTUsIg9qBtm8~PGs43HLmgDYlE61ryf7xIdY0dDLca7h2eF2GWiUk3bwqhGV7L6z-0hPnewdufsf9OCPdEz8v4ZrEOHrJGe6q5Gr9uxKB97jaJf1vqnjvy-16tvcauaew2FYhYZIRGgTOLh~6Wi~A__",
          title: "Xe đạp trẻ em Xaming mẫu mới XAMING03",
          reviews: 8,
          originalPrice: "1,080,000",
          salePrice: "890,000",
          discountPercent: 18,
        },
        ],
      };
    },
  };
  </script>

  
  <style>
  </style>
  