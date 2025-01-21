<template>
    <div class="services-container">
        <h2 class="text-center mb-5 font-bold">DỊCH VỤ NỔI BẬT TẠI GOLDEN BEE</h2>

      <div class="row">
        <div class="col-md-6 mb-4" v-for="(service, index) in services" :key="index">
          <div class="service-item d-flex align-items-start gap-3">
            <img :src="service.src" alt="Icon" class="service-icon" />
            <div>
              <h5 class="service-title">{{ service.title }}</h5>
              <p class="service-description">{{ service.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        services: [
          {
            src: "https://s3-alpha-sig.figma.com/img/7bff/4ce5/a40e5aebd6ef615347e31cb09e2dd6a6?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RtTh8NKvrVieV2~rlVH3HbAXovL3zOLHviH8v9sOFjcUNvvtJEcPLiJ0LohDEskJYS20~vt4-kbRPdH8tlcwnIbv~sTMEoDy61mrtJpNsAy2~jfR~tocJgTZxPZRgoZhHbUlbA4lAbF~ZIH07GlKF22CaQiz-fLumZLIDgGpfFTLhNijV1lxOmAvW6uDBy7NCCwrNEQRAN7hFwJn6tfRw7LrNA9wwmsUgVyd9CVbkoaetTKvl8cAvLHpUO7dXPy0mxw-VMXP3HHlT-ov8QLh1D9WrC3x3ERNpo-qEa5Nm~Ua5QNTMqOEAPBaB0FFXSJuRyXWzzh0fpIb1RwF~NzrAg__",
            title: "Thiết kế website tùy chỉnh theo yêu cầu",
            description:
              "Chúng tôi mang đến các giải pháp thiết kế website độc đáo, cá nhân hóa theo ngành nghề và nhu cầu của doanh nghiệp bạn, giúp thương hiệu nổi bật và chuyên nghiệp hơn.",
          },
          {
            src: "https://s3-alpha-sig.figma.com/img/cd50/bf90/80db4afb05f532f54fa8574b191e9fbd?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VMMO7y5PUMDczOW0ChfiVnfibvNx286ZiKnD~IXJv03HWxCJPUnSDMDs9zUFf7-e0wWNXejWhIYJQjrchD9~-sIkieEIFmXz-8E4UwarmjBik2gzpXxYIO2LV-QwpACD6wJWNZPHEqV0Z2gWCoRvPO94K8hqf970Lnzsa2Ji8t8pxa-4tiXV-S-v2SxLS0kADduKKx2tfl7BH7cXaBVuw7UKhADj949q8YHPhGDgufU7v2U9BndsLUbIBz0jNLZFkdqkPP7mM9X3hxGXPVXh7FAi-z~UTj-OWQjfB0EbFMdlhWNTpjweIEEfA84WzvupwUe883Zsb36xrqLlZxjD-w__",
            title: "Giao diện thân thiện, tối ưu trải nghiệm người dùng (UX/UI)",
            description:
              "Giao diện được thiết kế hiện đại, dễ sử dụng, giúp khách hàng truy cập trang web của bạn có trải nghiệm mượt mà và hài lòng.",
          },
          {
            src: "https://s3-alpha-sig.figma.com/img/1cdb/8ace/ab1ab1d6ba31f006aadc59837de50ea2?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PgbBRX6cGE-h0HPnL5N~M6iqpF9jWNOS2kp~676igabyHIlOaaZrPAyRkUSkUXUf4922Wqvt0KyJZtxUITb8HwmJB-L2t56XVsSXAJqvOj8j~gfZnDvn6N~G91awn7bCuCVGSQ1l1UvQ8KPGj2chED1WoNUVVuJRAU6kaPTvqWwkdHcChI6xRpLlZvNm3evEb4K16vtLBJD9MdbGsxOd2QCNsUiW-yrX3lkZFFU7C89nQI8EHZ99c1XwqBgaFwj9hKtYHviPclL8nVH9FZzZVAAr9TKH1cEB7BCcVIH6i1mpF-X~2zqD1UxFJ0Qd8iZ19mArPIylbF5nR5C866CdrA__",
            title: "Công nghệ tiên tiến, chuẩn SEO",
            description:
              "Sử dụng công nghệ mới nhất, website không chỉ hoạt động nhanh, ổn định mà còn được tối ưu chuẩn SEO, giúp tăng thứ hạng trên Google và thu hút khách hàng tiềm năng.",
          },
          {
            src: "https://s3-alpha-sig.figma.com/img/1522/479f/a117f10e206ac819880c0d473091e008?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mFqK2YFp0l0OzkwwT5g~wyr~6~3sTh4CDiXMTHx8v6ETbmm8XPyS3vbmPMIepOncNfpE~inNhYed443~6CNXfM~q1eKXUxuQkwW3jbsD39SEHtwWI5q8c~83Js~vcGa0EysCHsU~zXCTRBKzTamESBPM8UFcC~y0eK5I6xNQwD0fxWt7SKi3KnCSlxTgOF051GvujmPXBUX1~ChoUHd~Eed6Y~pqhE-ZN9FDsuCJwVH9Yxf8tGD4ESm7oYM0hKcyUsyDqqP-ZWgXHbBBlgCUlQTKRAcUprNBP6GEu4xpXbnVCNeQTms21vIxYtllEHCmxm8O80zUMd7O7Ydl70urqQ__",
            title: "Quản lý nội dung dễ dàng",
            description:
              "Hệ thống quản lý nội dung (CMS) linh hoạt, giúp bạn dễ dàng chỉnh sửa và cập nhật thông tin mà không cần kiến thức lập trình.",
          },
          {
            src: "https://s3-alpha-sig.figma.com/img/df9f/13f4/a185e0a5198aba2221e116cc669e703c?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L~Hs8oGg22hBXyEMG8hkIFlj9tN2JRxRCkzB63rZ~SJWNuA33H0o1fP3bCM3hBpNRnSGFfNdCDbxI4zkIR5i94rwxtMqkPFr0v5dgfaE7iA3eTcX8MhAs7~Cz3FOffl~fqoYtj5yvqnDCKAKnor1LdHhdNCqPrQjqDPRcXghesDlUavpnpX5gQdvXEAaLv65Leiwm0KgdxaHtlHC2H6nDsgHlP1Fdi1C-kBHVwEvJmfhhNSlKBnK4NJtFW8sGjQSmb16rTuqgszeYAS-n95Blrhc5xBkTxDzFXHqvOD~j1qxS1axW~4R~7kn0GtcJ2tUb-y59mPc1bSNjxQvx6xuQQ__",
            title: "Hỗ trợ kỹ thuật 24/7",
            description:
              "Đội ngũ chuyên gia luôn sẵn sàng hỗ trợ bạn mọi lúc, mọi nơi, đảm bảo website của bạn hoạt động liên tục, không gián đoạn.",
          },
          {
            src: "https://s3-alpha-sig.figma.com/img/93a6/7382/587b2aa78fa45f00795e979df5bb9fd3?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YqdBOgHYcv3niIrlzz0ClpedY3Sike7BcmCfa~9wEiWdkl3WrJzHa0CVWrG5~oVC60o9jtvBsiVD4O6XNnQRd9wYfUv8Lx~6eO8vozeSSVT4vOMW1ViNWPUFRZIlVx7GdOqGSxsZDcQIoYwg1HbU~JbK0khCZ4XtEYEAMCs3ZboVWO8POKTFkQ3Krhs3-9krbCQA5VT9UDq973yAxrpUE-pgHqvjJzzv1gy41DS2OUBAatvipcvY1Nzk2CYB8O0G6XCxMZVit67~XMCQixHxdIRoEtIzmIYusAiLHpIIQK2oCT8wxjj9I~fWwyy70fcaN0yz-D5te6AaZa6v2NXGPw__",
            title: "Dịch vụ chăm sóc và nâng cấp website định kỳ",
            description:
              "Không chỉ thiết kế, chúng tôi còn cung cấp dịch vụ bảo trì, nâng cấp website để bạn luôn đón đầu xu hướng và duy trì hiệu quả kinh doanh.",
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .services-container {
    max-width: 900px;
    margin: 0 auto;
  }
  .service-item {
    display: flex;
    align-items: flex-start;
    gap: 15px;
  }
  .service-icon {
    width: 50px;
    height: 50px;
    flex-shrink: 0;
  }
  .service-title {
    font-weight: bold;
    font-size: 1.2rem;
    margin-bottom: 5px;
    color: #333;
  }
  .service-description {
    font-size: 0.95rem;
    color: #555;
  }
  .text-center {
    text-align: center;
  }
  .row {
    display: flex;
    flex-wrap: wrap;
  }
  .col-md-6 {
    flex: 0 0 50%;
    max-width: 50%;
    padding: 10px;
  }
  .mb-4 {
    margin-bottom: 1.5rem;
  }
  .mb-5 {
    margin-bottom: 3rem;
  }
  </style>
  