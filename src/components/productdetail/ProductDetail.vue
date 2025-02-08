<template>
  <div class="container mx-auto p-4">
    <!-- Product Display Section -->
    <div class="flex flex-col md:flex-row gap-4">
      <!-- Left Side: Product Image and Thumbnails -->
      <div class="w-full md:w-1/2">
        <!-- Main Product Image -->
        <img src="/src/assets/images/5d46b993ecded206c97a8df7fe5e1edc.png" alt="Xe đạp xaming mini XM24" class="w-3/4 mx-auto mb-4" /> <!-- Giảm kích thước hình chính -->

        <!-- Thumbnail Images -->
        <div class="flex gap-2 justify-center">
          <img src="/src/assets/images/0073ec357b2645bf7803cd12cbc162d2.png" alt="Thumbnail 1" class="w-16 h-16 border" /> <!-- Giảm kích thước thumbnail -->
          <img src="/src/assets/images/59f01abd1250450d7fc9500f73132efb.png" alt="Thumbnail 2" class="w-16 h-16 border" />
          <img src="/src/assets/images/7af96dab131203a49d4973130ecd2e44.png" alt="Thumbnail 3" class="w-16 h-16 border" />
          <img src="/src/assets/images/c92617dc964e2d96ca7a0e7b896a2cbd.png" alt="Thumbnail 4" class="w-16 h-16 border" />
          <img src="/src/assets/images/fb14940f86aea70aa1c74d6f1302270b.png" alt="Thumbnail 5" class="w-16 h-16 border" />
        </div>
      </div>

      <!-- Right Side: Product Info -->
      <div class="w-full md:w-1/2">
        <h1 class="text-2xl font-bold mb-2">Xe đạp xaming mini XM24 kèm giỏ đựng cốc</h1>
        <div class="flex items-center mb-2">
          <span class="text-yellow-500 mr-2">★★★★★</span>
          <span class="text-gray-600 mr-4">Đánh giá 25</span>
          <span class="text-gray-500 mr-4">Mã sản phẩm: XM24</span>
          <span class="text-green-600">Còn hàng</span>
        </div>

        <!-- Price -->
        <div class="mb-4">
          <span class="text-gray-500 line-through text-lg">2,000,000đ</span>
          <span class="text-red-600 text-2xl font-bold ml-2">1,690,000đ</span>
        </div>

        <!-- Product Options -->
        <div class="mb-4">
          <div class="mb-2">
            <span class="font-bold block">Màu sắc: </span>
            <button class="px-3 py-1 bg-gray-200 border border-gray-300 rounded hover:bg-gray-300 mr-2">Trắng</button>
            <button class="px-3 py-1 bg-gray-200 border border-gray-300 rounded hover:bg-gray-300 mr-2">Hồng</button>
            <button class="px-3 py-1 bg-gray-200 border border-gray-300 rounded hover:bg-gray-300">Kem</button>
          </div>
          <div>
            <span class="font-bold block">Size: </span>
            <button class="px-3 py-1 bg-gray-200 border border-gray-300 rounded hover:bg-gray-300 mr-2">20inch</button>
            <button class="px-3 py-1 bg-gray-200 border border-gray-300 rounded hover:bg-gray-300 mr-2">22inch</button>
            <button class="px-3 py-1 bg-gray-200 border border-gray-300 rounded hover:bg-gray-300">24inch</button>
          </div>
        </div>

        <!-- Features List -->
        <ul class="list-disc pl-5 mb-4 text-gray-700">
          <li>Chất liệu: Thép carbon, hợp kim nhôm, nhựa ABS</li>
          <li>Kiếu dáng: Xe đạp mini cho bé gái</li>
          <li>Màu sắc: Trắng, vàng kem, hồng</li>
          <li>Độ tuổi: 20inch (8-12 tuổi);22inch (12-16 tuổi);24inch từ 14 tuổi</li>
          <li>Chịu tải: An toàn 65kg;tối đa 100kg</li>
          <li>Thương hiệu: Xaming</li>
          <li>Xuất Xứ: Trung Quốc</li>
        </ul>

        <!-- Buttons -->
        <div class="flex items-center gap-4">
          <!-- Quantity Selector -->
          <div class="flex items-center border rounded-lg overflow-hidden">
            <button class="px-4 py-2 bg-gray-200 text-gray-700 hover:bg-gray-300 focus:outline-none">-</button>
            <span class="w-16 text-center">1</span>
            <button class="px-4 py-2 bg-gray-200 text-gray-700 hover:bg-gray-300 focus:outline-none">+</button>
          </div>

          <!-- Add to Cart Button -->
          <button class="px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 focus:outline-none">Thêm vào giỏ hàng</button>

          <!-- Buy Now Button -->
          <button class="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none">Mua ngay</button>
        </div>
      </div>
    </div>
          <!-- Extra Options Section (Shipping Info, Guarantees, etc.) -->
    <div class="w-full lg:w-1/4 mt-8">
      <div class="border p-4 rounded-md bg-gray-50">
        <h2 class="font-bold text-lg mb-4">Lựa chọn số 1</h2>

        <div class="flex items-center mb-4">
          <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m2 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span class="ml-2">Uy tín hàng đầu</span>
        </div>

        <div class="flex items-center mb-4">
          <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <span class="ml-2">Đổi trả dễ dàng</span>
        </div>

        <div class="flex items-center mb-4">
          <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6 4a9 9 0 10-18 0 9 9 0 0018 0z"></path>
          </svg>
          <span class="ml-2">Hỗ trợ kỹ thuật</span>
              </div>
            </div>
          </div>
        </div>
</template>
