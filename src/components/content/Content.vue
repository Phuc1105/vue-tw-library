<template>
  <div class="flex flex-col md:flex-row items-center justify-between p-10 bg-gradient-to-b from-[#FFC800] via-[#D6943D] to-black text-white">
    <!-- Left Section -->
    <div class="flex-1 flex items-center justify-center relative">
      <!-- Background Arch -->
      <div
        class="absolute custom-arch"
        style="width: 380px; height: 550px; border-radius: 350px 350px 0px 0px; background: linear-gradient(199.91deg, #1A90D7 0%, rgba(44, 202, 195, 0.28) 100%);"
      ></div>
      <!-- Phone Mockup -->
      <div class="relative w-[380px] z-10">
        <img
          src="https://s3-alpha-sig.figma.com/img/d4c1/525c/22c782d015e5ffd7b19d40bb0c922860?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=LH5UBosXa7jqMkC09kK8Op3r4vLYHTydvVj6C--WLejSjN9VzDO1Dq~rhwGBNjF4GMIWfL38XiZdTWKVhvSc0MeNXEI8LSszIYddBYX6Yd1m43MgdnH1cw2Yan7re2b2favh5nxukLIjY3sSUWobBVR~gsbmsf2kH6pX99ssm-1tO47SwERLPixf5oMVX5Bqk8xy8HQwD0nTl86vrOD16CqaPelkSNYlVPBiyzBRD3GeD6rkNH1m9eHoIMd30aTPMQU4iCinV0nqICP88vaKmggFNLRNLMR2WrSh~X8DFsf9iF7LVzhIIL5etvMPn5xgfh6yeY-ib8q8Pj1hXzY7YQ__"
          alt="Phone Mockup"
          class="w-full h-auto rounded-xl shadow-lg"
        />
      </div>
    </div>

    <!-- Right Section -->
    <div class="flex-1 p-5">
      <!-- Title Section -->
      <h2 class="text-3xl font-bold mb-10">
        TẠI SAO BẠN NÊN THIẾT KẾ WEBSITE TẠI GOLDEN BEE
      </h2>

      <!-- Content Section -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <!-- Feature 01 -->
        <div class="relative p-5">
          <h1 class="absolute text-[80px] font-bold text-white/10 top-0 left-0">
            01
          </h1>
          <h3 class="text-xl font-semibold mb-3">Giao diện website ấn tượng</h3>
          <p class="text-base">
            Giao diện đẹp và thân thiện, thiết kế tối ưu bố cục và màu sắc sẽ
            giúp tăng trải nghiệm của khách hàng.
          </p>
        </div>

        <!-- Feature 02 -->
        <div class="relative p-5">
          <h1 class="absolute text-[80px] font-bold text-white/10 top-0 left-0">
            02
          </h1>
          <h3 class="text-xl font-semibold mb-3">Tính năng đa dạng nổi bật</h3>
          <p class="text-base">
            Những tính năng tìm kiếm, giỏ hàng, đặt hàng, thanh toán... cần được
            trang bị để đáp ứng tốt nhu cầu bán hàng online.
          </p>
        </div>

        <!-- Feature 03 -->
        <div class="relative p-5">
          <h1 class="absolute text-[80px] font-bold text-white/10 top-0 left-0">
            03
          </h1>
          <h3 class="text-xl font-semibold mb-3">Thân thiện với người dùng</h3>
          <p class="text-base">
            Thiết kế thân thiện với người dùng, tương thích trên nhiều thiết bị
            sẽ giúp doanh nghiệp tiếp cận đến người dùng dễ dàng.
          </p>
        </div>

        <!-- Feature 04 -->
        <div class="relative p-5">
          <h1 class="absolute text-[80px] font-bold text-white/10 top-0 left-0">
            04
          </h1>
          <h3 class="text-xl font-semibold mb-3">Cam kết bảo hành trọn đời</h3>
          <p class="text-base">
            Cung cấp dịch vụ thiết kế trang web trọn gói với chi phí tiết kiệm
            cùng với chất lượng sản phẩm tốt nhất.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoldenBeeUI",
};
</script>

<style scoped>
.custom-arch {
  position: absolute;
}

/* Media Query cho điện thoại */
@media (max-width: 768px) {
  .flex {
    flex-direction: column;
  }
  .flex-1 {
    flex: 1 0 100%;
  }

  .w-[380px] {
    width: 300px;
  }

  .text-3xl {
    font-size: 1.8rem; /* Giảm kích thước font cho tiêu đề */
  }

  .grid {
    grid-template-columns: 1fr; /* Chuyển grid thành 1 cột */
  }

  .text-xl {
    font-size: 1.2rem; /* Giảm kích thước font cho các tiêu đề nhỏ */
  }

  .text-base {
    font-size: 0.95rem; /* Giảm kích thước font cho nội dung */
  }

  .p-10 {
    padding: 20px; /* Giảm padding trên các thiết bị nhỏ */
  }
}
</style>
