<template>
  <div class="max-w-7xl mx-auto p-8 bg-gray-100">
    <!-- Heading Section -->
    <div class="flex flex-col justify-center items-center mb-6 text-center">
      <h2 class="text-3xl font-bold text-gray-800 mb-4">
        Hãy để GOLDENBEE giúp bạn trả lời những câu hỏi trước khi muốn thiết kế một trang web
      </h2>
    </div>

    <!-- Container for the heading and content -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <!-- Text section -->
      <div class="flex flex-col justify-center items-center">
        <!-- Accordion Section -->
        <div class="space-y-4 w-full">
          <!-- Accordion Item 1 -->
          <div class="border border-gray-300 rounded-lg shadow-sm">
            <button
              @click="toggleAccordion(1)"
              class="w-full text-left px-4 py-3 bg-white hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between focus:outline-none rounded-t-lg">
              <span class="font-semibold text-gray-800">1. Công ty có hỗ trợ tư vấn ý tưởng thiết kế không?</span>
              <svg :class="{'transform rotate-180': activeAccordion === 1}" class="w-5 h-5 text-gray-600 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div v-if="activeAccordion === 1" class="px-4 py-3 text-gray-700 bg-gray-50 rounded-b-lg">
              Chúng tôi luôn sẵn sàng lắng nghe và thấu hiểu nhu cầu của bạn. Đội ngũ chuyên gia sẽ tư vấn và đưa ra
              giải pháp thiết kế phù hợp với lĩnh vực kinh doanh của bạn, giúp website nổi bật và ấn tượng.
            </div>
          </div>

          <!-- Accordion Item 2 -->
          <div class="border border-gray-300 rounded-lg shadow-sm">
            <button
              @click="toggleAccordion(2)"
              class="w-full text-left px-4 py-3 bg-white hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between focus:outline-none rounded-t-lg">
              <span class="font-semibold text-gray-800">2. Giá phần mềm quản lý nhà hàng Sapo là bao nhiêu?</span>
              <svg :class="{'transform rotate-180': activeAccordion === 2}" class="w-5 h-5 text-gray-600 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div v-if="activeAccordion === 2" class="px-4 py-3 text-gray-700 bg-gray-50 rounded-b-lg">
              Giá của phần mềm quản lý nhà hàng phụ thuộc vào các gói dịch vụ và tính năng bạn lựa chọn.
            </div>
          </div>

          <!-- Accordion Item 3 -->
          <div class="border border-gray-300 rounded-lg shadow-sm">
            <button
              @click="toggleAccordion(3)"
              class="w-full text-left px-4 py-3 bg-white hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between focus:outline-none rounded-t-lg">
              <span class="font-semibold text-gray-800">3. Phần mềm có kết nối được máy in hóa đơn, máy tính tiền không?</span>
              <svg :class="{'transform rotate-180': activeAccordion === 3}" class="w-5 h-5 text-gray-600 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div v-if="activeAccordion === 3" class="px-4 py-3 text-gray-700 bg-gray-50 rounded-b-lg">
              Phần mềm hoàn toàn tương thích với máy in hóa đơn và máy tính tiền, giúp bạn dễ dàng quản lý các hoạt động bán hàng.
            </div>
          </div>
        </div>
      </div>

      <!-- Logo section -->
      <div class="flex justify-center items-center">
        <img src="/src/assets/images/5b4ecc0fb285d6819eb204a9939eeafb.png"
          alt="Golden Bee IT Solutions Logo" class="w-30 h-30">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeAccordion: null, // Trạng thái cho accordion đang mở
    };
  },
  methods: {
    toggleAccordion(index) {
      this.activeAccordion = this.activeAccordion === index ? null : index;
    }
  }
};
</script>

<style scoped>
/* Style cho accordion mở ra và thu lại */
</style>
