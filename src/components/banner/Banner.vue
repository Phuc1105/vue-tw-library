<template>
  <div class="container mx-auto py-12 px-4">
    <div class="bg-white rounded-lg shadow-lg p-10 flex flex-col lg:flex-row items-center relative space-y-8 lg:space-y-0">
      <!-- Left Content: Title, Description and Button -->
      <div class="lg:w-2/3 lg:pr-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-4 leading-tight">
          Giải Pháp Công Nghệ Thông Tin - Thiết Kế Website Chuyên Nghiệp
        </h1>
        <p class="text-gray-600 mb-8 text-lg">
          Tính tiền nhanh chóng & vận hành ổn định với phần mềm quản lý quán ăn được 230,000+ khách hàng tin dùng
        </p>
        
        <div class="flex items-center space-x-4">
          <a href="#"
             class="inline-block bg-yellow-500 text-white font-semibold py-3 px-10 rounded-full shadow-lg hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2">
            Liên hệ ngay
          </a>
          <!-- Icon aligned next to the button -->
          <div class="w-20 h-20 lg:w-20 lg:h-40 rounded-full overflow-hidden flex items-center justify-center">
            <img src="https://s3-alpha-sig.figma.com/img/64df/f166/ffbb08e6bbc4b268fd651c4a5b17be2a?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N-90zYn-lW8pQ0LSPPx0pxBE4wB7RIp8AujGPR9-aBiU8-U8lR5G-3cSw66vaMdXspyEdK769JXkGsD9ILHSQwd0DSijf8iTeqO1afJ2QQcf6qPbTulpa9fV-TP9bZTlo9QuP0Q6qMBjTrLGoLvTWhCRKSpuF2PB9oRtmvYvNEtSs2uSlBdMFTDp5pAp0pAhTnazOqE~YCXdAmO9ZpjqpQho-HNuYobpFXkVCBbghOhdIbAo1~UEQkE8~9br5asAaDeqDqQ~8X4h37CdINHK6p9VBYsBTQuf0Oen7TjVpoOFa-fSwGjxw30kmOspB2MZ1C4IzEVlC0GL~ye5WPEJ1g__" 
                 alt="Icon" 
                 class="object-cover w-20 h-50">
          </div>
        </div>
      </div>

      <!-- Right Content: Stacked Images with Overlap Effect -->
      <div class="lg:w-1/3 relative">
        <!-- Top Image -->
        <div class="relative z-60 mx-auto w-32 lg:w-52 border-4 border-yellow-400 p-2 rounded-lg transform hover:scale-105 transition-all duration-300">
          <img src="https://s3-alpha-sig.figma.com/img/a736/1d0e/9466cc3674e4f3e0ac8af16310991295?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JOJn8BYq6Pc4ZXreVq4WwsGT4j4DHQh3XU0dZ-ZhrrwYSwAD5xZRg8an~zRYsafzTBy7FyLtl7kBpxtGaDo8DHVe-Y-b3MUG~IOtd73noU1E-6MNortNJQj44~bdoS9v8E2HmfL3GWbfPMzejUwjFUz6bfBXQE2flBGSsesPcSVNtJrwM4Vx7j9mRYJItbXvS8Lgrl4VBR12mQSyh23WUcw0KRJkvwj-W~DOwIDk6G~31todomNxgmtPcU4H8w2mV6NtZ2p0Qt2CBk5NOyXpyQodeBASJRarRv33bxS-D~APneFPq9~-SC3Ye3iHNDm1Y0XHfh3YHxLljOxCw~JiNA__" alt="Website 1" class="rounded-lg object-cover h-40 lg:h-58">
        </div>

        <!-- Bottom Left Image -->
        <div class="absolute z-20 top-16 left-0 w-32 lg:w-52 border-4 border-yellow-400 p-2 rounded-lg transform hover:scale-105 transition-all duration-300">
          <img src="https://s3-alpha-sig.figma.com/img/dc8c/0e57/177bb9205e2cec05a91c27a98bc754c7?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TRtKTzLXNousnxuZmLxZDolHkVNvppCfP-15kKe9YPB~YYVn-bwcvj7BzKXSEwWm1AGR74g~PUmiRtlhsWt8Uqb78epjdWHdd9MnwllwphjcXlhB~Y-Q2lxFPobFIrynsLoPdqsVlnaXEVAIQnhynptOMq04EWB6PH5JJeLLL7ZHlOlgFJjmp3s1Jp76~ZSArE0TAXiwmxQ1CiiQdx5OVnZPyhAOWZCwsI0j6UiqdJoQdO~YHEjD4hLcir15FsRN2mrpTdjOYcj4xKiHhgDAvVLq2W7OOuZiRhHehIDfKVVhtaZkITFfM-fNPVQMQ-vkbb90YpmIr9rhOaCSTwkf4A__" alt="Website 2" class="rounded-lg object-cover h-40 lg:h-58">
        </div>

        <!-- Bottom Right Image -->
        <div class="absolute z-10 top-28 right-0 w-32 lg:w-52 border-4 border-yellow-400 p-2 rounded-lg transform hover:scale-105 transition-all duration-300">
          <img src="https://s3-alpha-sig.figma.com/img/6ca1/a3a7/92adfdf9a2200a9dd82bb23dad6e52ee?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Daeucwx2PFtNeU9061GBqrCZ1sPBLfgmGvRjel4f5-Hj6nWiS564qusYRHLuRlgTnsUO8b5AwPEJtvkpATQ7Tpk7U1tj4pnUHPXb4iikbwzYC3wcoJxchchA-2-4dy--I8OxulndXsdelNMOHI5Lx~qY2pS3wsBjO9P~Zx-7EUrU0DoQt0B-eo2Xq0dKK5fW3bgPY9s8W-O22K4Pb9e329dZ-6t3uV0u9Yzxxf9GFOb5-6uer6-2jsdAP2D2-WIBvRQkTm98R1a1xLjkB8mgHvZT3vaScVaLAmTCz5ozcVDv4BLjf1ABQOo1CbGsLbjjnabQp4qi0gkBAQ-kI73HAQ__" alt="Website 3" class="rounded-lg object-cover h-40 lg:h-58">
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
