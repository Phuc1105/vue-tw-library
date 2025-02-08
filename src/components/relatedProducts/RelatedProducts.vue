<template>
  <div class="container mx-auto py-8">
    <h2 class="text-2xl font-bold mb-6 text-center">Sản phẩm liên quan</h2>
    <!-- Grid: 1 cột cho màn hình nhỏ, 2 cột cho sm, 3 cột cho md, 4 cột cho lg -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <!-- Lặp qua danh sách sản phẩm -->
      <div
        v-for="(product, index) in products"
        :key="index"
        class="relative border p-4 rounded-lg shadow-md text-center w-full"
      >
        <!-- Nhãn giảm giá -->
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

        <div class="flex items-center justify-center space-x-4">
          <p class="mt-2 text-sm line-through text-gray-400">
            {{ product.originalPrice }}đ
          </p>
          <p class="text-[#af1313] font-bold text-lg">
            {{ product.salePrice }}đ
          </p>
        </div>

        <div class="mt-4 flex items-center justify-between">
          <p class="text-[#096246] text-sm flex items-center font-bold">
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
</template>

<script>
import Box from '../icons/IconBox.vue';

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
        // Add more products as needed
      ],
    };
  }
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
