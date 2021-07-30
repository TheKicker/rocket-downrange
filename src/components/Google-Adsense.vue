<template>
  <section class="GoogleAdsenseComponent">
    <div :class="classNames">
    <ins
      :className="adsbygoogle"
      :style="{display: 'block'}"
      :data-ad-client="googleAdId"
      :data-ad-slot="slot"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  </div>
  </section>
</template>

<script>
export default {
  name: "GoogleAdsense",
  props: {
    timeout: Number,
    classNames: String,
    slot: String
  },
  data() {
    return {
      googleInit: null,
      googleAdId: "ca-pub-4126541105328321"
    };
  },
  mounted() {
  	let timeout = 200;
    if(this.timeout) timeout = this.timeout;
    this.googleInit = setTimeout(() => {
      if (typeof window !== "undefined")
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }, timeout);
  },
  destroyed() {
    if (this.googleInit) clearTimeout(this.googleInit);
  }
};
</script>
