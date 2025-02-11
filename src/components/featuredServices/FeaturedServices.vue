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
          src: "https://s3-alpha-sig.figma.com/img/7bff/4ce5/a40e5aebd6ef615347e31cb09e2dd6a6?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qV~1PSr9AXJN2~vdfA1TMvNJ4HIwEQY-EiL50iojXr08eAXtodWHCPtjDfFb7ZO7QWOvvoDUYvxWBtcNtCOjpNoRKrusNwfmH0eDtMZWh--JG0W1IsgyY32mwdI1A~0KEXcMhUX6QndCW82TtfdCql3XKWbG89anMxIG-lz6J6gFDV2kkg4sU3nM3zXDcP3LXvjoiPRdW-FhLj6d8tHSX35HFCb3rfDvFqgilRV0F82lUhgEzuThvFqOCfkFGNpjhoZHJ~Eg8RAu9g6Y7iZM-keCUOwoy4zktww3u8t9aFao8KkLWrpseiuZSar~C0khOk1GVM3afcGHv9FxrAso8Q__",
          title: "Thiết kế website tùy chỉnh theo yêu cầu",
          description:
            "Chúng tôi mang đến các giải pháp thiết kế website độc đáo, cá nhân hóa theo ngành nghề và nhu cầu của doanh nghiệp bạn, giúp thương hiệu nổi bật và chuyên nghiệp hơn.",
        },
        {
          src: "https://s3-alpha-sig.figma.com/img/cd50/bf90/80db4afb05f532f54fa8574b191e9fbd?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SyV4eosGBJXtFEbNHJNSZcVExne3uAxBMQZw-FkkebEQvvTHu0LlKsmJobgh4FQElYxBAvFZkD9mU5~b~9BcRxkCtOhp0rICpaVzjjf7DG-fMRowuJLjC32TmxGbehZTBiLai5epUYEzFYLQGZXczrOdPZ5I5Eo6dSxhREzPUFFGffT3e-sXUuEs4-114XuXgPfWXgj3k~ia7p8iHsrpyZiytLuxvYTNRl~LowJXC9ru8N117Mtfagp9Tze2tqALf1YEJXmmhdxo2aE5sZ8qvVUilmN6KUtci79jifWdiZPjr3SS3vl~W5mKmt5fn-L947jqPNt7EMx8YgygQnrOtw__",
          title: "Giao diện thân thiện, tối ưu trải nghiệm người dùng (UX/UI)",
          description:
            "Giao diện được thiết kế hiện đại, dễ sử dụng, giúp khách hàng truy cập trang web của bạn có trải nghiệm mượt mà và hài lòng.",
        },
        {
          src: "https://s3-alpha-sig.figma.com/img/1cdb/8ace/ab1ab1d6ba31f006aadc59837de50ea2?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kwxd7bISJ1W6K5fc~AUN~1z-XV~F~D2zClXPrtN-HUNt88nzyWl8~KsLNvux1hV2vjW9lwbH7wiVevSEUiU7UOPqMX2IpAxBvygTUO2VBERyGOo-cl-DsyNeyKDBLMRCxLVADMyV558t7lS31y0Zz4gGj6E7EfxJjPuUye-1fGCUITV7uXDzVQi4uG22WLqQalrBk9ScNmsWATgS04yF9tOI~DhwXlD6fk2aI802F2b0hstNnHDF7xQeJWjLRxofYNN3BKC70~Ek2TIT1rDML7G3BAsCIUZaTbsMkyu88vgRDCoF8VENdUmqonMYFfsSxFBr4lwTwA0yz1PQGh4A7Q__",
          title: "Công nghệ tiên tiến, chuẩn SEO",
          description:
            "Sử dụng công nghệ mới nhất, website không chỉ hoạt động nhanh, ổn định mà còn được tối ưu chuẩn SEO, giúp tăng thứ hạng trên Google và thu hút khách hàng tiềm năng.",
        },
        {
          src: "https://s3-alpha-sig.figma.com/img/1522/479f/a117f10e206ac819880c0d473091e008?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FJXXu0bc~YmaeX3zYsGdywIBaDk5J2qQBTYT6amzh~MnVGYVb9Ysz7kNdd005zf1yIqT7UD9Zv5E3uLwhfaCkGe9FbTK9~UPt8LtyIU81vdLowJY2F3WDZimwpeZ13vGBQHiUXfCUKcriQookvtNLkWbi6R9eGoMD-cOxR5Xef5oJE34uvpCyj2qWQbJsktFAl7n-65Ebw51x3vAxffWv19uQVL8WSFNCIKJWTKrAuqSS3F5g83ZumQdBsmxVaKV1Za2q~a-AprnWvanBQJannV7Sxz81VnwLIBMsu7chu64MFlflq-5NMAvdc6PuiSFcEMxyCIXkMVqyVnUEldbWg__",
          title: "Quản lý nội dung dễ dàng",
          description:
            "Hệ thống quản lý nội dung (CMS) linh hoạt, giúp bạn dễ dàng chỉnh sửa và cập nhật thông tin mà không cần kiến thức lập trình.",
        },
        {
          src: "https://s3-alpha-sig.figma.com/img/df9f/13f4/a185e0a5198aba2221e116cc669e703c?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=h4XhmG1ZuAyLWt5GJyOdcpuHJugpCidfK9RiJd1vX5sw1mPksRX1dOBAzeDn56Ro3bghb8HppUqaRQLDNXzZ1n~9EKCHJ8bkOG1GQ-xaR6LeCFdCKQaC0CzZLzOTauHTWoSixUI4ANm1nxm98B9vLNvqbOw2CZZf60ZNf4y1MeuQboiSVSe0LDdelGi6bYjfGLVOdBLo0gyAhJPjlaydLmX-n542TRaBVAKi3e1ZOb~W7ayQ-rUQi44p-fv7RB9gSr5ytNc5M3xQtfi8aikiobaw5dpx9lIl5QsBBJOWLYhcNC41N7FQb-kA5-e6fKClMtqYuL25LSkhx8MCV7CGqA__",
          title: "Hỗ trợ kỹ thuật 24/7",
          description:
            "Đội ngũ chuyên gia luôn sẵn sàng hỗ trợ bạn mọi lúc, mọi nơi, đảm bảo website của bạn hoạt động liên tục, không gián đoạn.",
        },
        {
          src: "https://s3-alpha-sig.figma.com/img/93a6/7382/587b2aa78fa45f00795e979df5bb9fd3?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=UsCVCIVPirN46UE02L6uKiG3oGOKQii7FkDAjlBejajGvzgm~1PvK74CGBTN7gsIDr3kJPfgeTqtqLYRBPuo2LRPyEO5RKTYQqFFa--MYW-mfq48H~yawfGNQHmldM-blZUj5uDlCMWEVcQHh0H1Y8XbM6Mcpr1Zi1dOxxLu1GtRPrJnLshsGwPD0CzjjpHhbSOxYZ2LI0nPJlYnTnG~4IEThHw2reImyiP5qjrTTJ2U-9lg1FR-dUT6~1UCj3LdIIswYDJOL9-56RCEwNJXMXhsI-DylZdiLHKS7HqrZGr5~cLBZXvVaUANGyRmq5B0Zdii34CzMYUMQisWprtrWw__",
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
  padding: 0 15px;
}

.service-item {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  flex-wrap: wrap;
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

/* Media Query cho thiết bị di động */
@media (max-width: 768px) {
  .service-item {
    flex-direction: column;
    text-align: center;
  }

  .col-md-6 {
    flex: 0 0 100%;
    max-width: 100%;
    padding: 10px 0;
  }

  .service-icon {
    width: 40px;
    height: 40px;
    margin-bottom: 10px;
  }

  .service-title {
    font-size: 1.1rem;
  }

  .service-description {
    font-size: 0.9rem;
  }

  .services-container {
    padding: 0 10px;
  }
}

/* Media Query cho thiết bị nhỏ hơn */
@media (max-width: 480px) {
  .service-title {
    font-size: 1rem;
  }

  .service-description {
    font-size: 0.85rem;
  }
}
</style>