<template>
  <div class="related-posts-container px-4">
    <h1 class="mb-5 font-bold text-center">BÀI VIẾT LIÊN QUAN</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      <div
        class="related-post bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition"
        v-for="(post, index) in posts"
        :key="index"
      >
        <div class="relative">
          <img :src="post.image" alt="Post Thumbnail" class="w-full h-32 sm:h-40 object-cover" />
          <div class="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-2 text-sm flex items-center">
            <span class="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M12 4.5c3.74 0 7 3.25 7 7s-3.26 7-7 7-7-3.25-7-7 3.26-7 7-7zm0 2C9.79 6.5 8 8.29 8 10s1.79 3.5 4 3.5 4-1.79 4-3.5-1.79-3.5-4-3.5zm0 4a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
              </svg>
              {{ post.views }} lượt xem
            </span>
          </div>
        </div>
        <div class="p-4">
          <h3 class="text-sm font-semibold">{{ post.title }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        posts: [
          {
            image: "https://s3-alpha-sig.figma.com/img/89b5/53f0/415f8f38bdb1084820a61222e3f8e734?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wt5L-BUHh6KIuH9LtjKBifvuZxEdvMEcES7AuLWJQyhMgoQYYFr3MsfepMg4pzoqL-AK52wD~dDKzD4OvrMOAQ5ETpSz3vj67Y6vuwS8hUaOSrbJQcebI92-6mEhZvmCgAPF2XgdEmFrmyJAUsI1StBtmvbjP~NeaIyg-g5U9PJvbU0eDva7cHAHX8NR0XOVa3k5vF7wgs9Yqx5OEFUzan3fdeKmR1GjvWP7A2s8jgsr7Y0BFKYo6aVKAwC5kvGGuBAmIwOmgDHdHUR0SwRvpLnDuSvcOUobWLCrKQ0fFivGy2PbrHh7t2elsORz~vm5Or4jHOGh50afd7Czn5Jo5Q__",
            title: "Giải đáp 1001 vấn đề về cách duet trên TikTok",
            views: "1845",
          },
          {
            image: "https://s3-alpha-sig.figma.com/img/968d/3092/9b9ae3fbe860b98f76e5134918f31067?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jb9PYyq4tpxZfbXAyoPPX8tI0V6vDIdVY9lPm0q-n74h3mCsHiIFvwnosMh8-ytiNd67HaRyyLcd1hinfijNuqLVRY0J9-0PinFJ7TgtMQenr57H942OkiHJT1KsYaxi0pMKK7sH4R2yqDNfvYq7w8BZ1VdylQ2KCkR08UblqXlrL6TGbgerl7Z066GEQhHkdvbRmghOSY1oCwfcl0Y6GY50bisHHDrhbW6NW2N-NG3i2Gt2Asq0jsRooqV~~FoL~DvITmVOmvjq643bvIMelf4DsxNUOY3VIjBObQzezFGkQB6COjsbRInqYL43ivdjO16vLTvv6yuKEVdOz2hMsA__",
            title: "Xu TikTok là gì? Cách bật xu TikTok cho tài khoản",
            views: "18779",
          },
          {
            image: "https://s3-alpha-sig.figma.com/img/97eb/c5cb/37b5d62b76770a09a74b00561698d85b?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=naLnUYxPr~obEkh-yPLYpo9MF37tZL36ONgl8kajlmLkCmjfdfC0kQe96AhO0uJt~7-7JgtxtmDcTYD577nP31CxN5HZnKRSz5JPQ5TV3QFVbsaWGBTX-xkRq2DhlcP9j~KvYzGFyalrUzBcdzzNmZshQIpjpweqCF4GN4Bd5XACPPJHvx8wcvjSxGaYCNkoBhwbUweeJgAkzaYpdysB9rXLCFkV0wOrmd~sgIfpPqtzqx03BPshWLsQcvQgaDNnqR5gwsj36Ym4iktrEXBIdzgYLQx2R6Tyoy98HKu8QCiS4Ez4cp~uxV05WAEEmINlvjJRPas4Nt-izBWnDFMXlA__",
            title: "Cách rút tiền từ TikTok về tài khoản chỉ với 3 bước",
            views: "44615",
          },
          {
            image: "https://s3-alpha-sig.figma.com/img/16ac/73b8/a4e23806362a264ada67e3b1950a3c11?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KUNhfQdQwiJIGGdWPy-Q3QoVz1mRa9pmqNPVDrl89ObwbZr4JM3B6Z8FuDtlRAR~00W9oyNTu5jVLXr8sSFrMDBU0MIZmHoQnFutL0VujPRr-V6-0J~lM2hREgv2~VgSz3Trgb-l3Skg5--KupUhl~iVFqJE2RM9YlH4vfDvLKOYgYawFB4QUkVwGCmWt0c7m8mvvoW7gTm5fTQcskkNY-9es3noNaQB-5btUY4TTgc5CQ7aLW6vgvTYpZQ40GZMOGxS6O0vxyBIO-eaW91niKNw7NGC-ybAD-Hbo40yodE2ly9aSqdnoIIGQwYOnNni6JKPxWOR7AUyRw-UTc17Hg__",
            title: "Affiliate TikTok là gì? Hướng dẫn cách làm affiliate TikTok",
            views: "2278",
          },
        ],
      };
    },
  };
  </script>
  

<style scoped>
.related-posts-container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>








