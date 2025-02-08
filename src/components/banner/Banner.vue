<template>
  <div class="container mx-auto py-8 px-4 md:py-12">
    <div class="bg-white rounded-lg shadow-lg p-8 md:p-10 flex flex-col lg:flex-row items-center relative space-y-8 lg:space-y-0">
      <!-- Left Content: Title, Description and Button -->
      <div class="lg:w-2/3 lg:pr-12 text-center lg:text-left">
        <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          Giải Pháp Công Nghệ Thông Tin - Thiết Kế Website Chuyên Nghiệp
        </h1>
        <p class="text-gray-600 mb-6 sm:mb-8 text-base sm:text-lg">
          Tính tiền nhanh chóng & vận hành ổn định với phần mềm quản lý quán ăn được 230,000+ khách hàng tin dùng
        </p>
        
        <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
          <a href="#"
             class="inline-block bg-yellow-500 text-white font-semibold py-3 px-10 rounded-full shadow-lg hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2">
            Liên hệ ngay
          </a>
          <!-- Icon aligned next to the button -->
          <div class="w-10 h-12 sm:w-14 sm:h-20 rounded-full overflow-hidden flex items-center justify-center ml-4 sm:ml-6 transform rotate-12">
  <img src="/src/assets/images/ffbb08e6bbc4b268fd651c4a5b17be2a.png"
       alt="Icon" 
       class="object-cover w-full h-full">
</div>

        </div>
      </div>

      <!-- Right Content: Stacked Images with Overlap Effect -->
      <div class="lg:w-1/3 relative flex justify-center lg:justify-end">
        <!-- Top Image -->
        <div class="relative z-30 mx-auto w-28 sm:w-32 lg:w-40 border-4 border-yellow-400 p-2 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg">
          <img src="/src/assets/images/177bb9205e2cec05a91c27a98bc754c7.jpg" class="object-cover w-full h-full rounded-lg">
        </div>

        <!-- Bottom Left Image -->
        <div class="absolute z-20 top-20 left-2 sm:top-24 sm:left-4 lg:top-16 lg:left-0 w-28 sm:w-32 lg:w-40 border-4 border-yellow-400 p-2 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg">
          <img src="/src/assets/images/92adfdf9a2200a9dd82bb23dad6e52ee.jpg" class="object-cover w-full h-full rounded-lg">
        </div>

        <!-- Bottom Right Image -->
        <div class="absolute z-10 top-20 right-2 sm:top- sm:right-4 lg:top-18 lg:right-0 w-28 sm:w-32 lg:w-40 border-4 border-yellow-400 p-2 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg">
          <img src="/src/assets/images/9466cc3674e4f3e0ac8af16310991295.jpg" class="object-cover w-full h-full rounded-lg">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeBanner'
}
</script>

<style scoped>
</style>
