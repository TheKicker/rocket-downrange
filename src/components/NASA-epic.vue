<template>
  <div class="Insight my-4 mx-4" hidden>
    <div class="card container">
      <div class="card-body p-3 p-md-6 m-md-3">
        <p class="h5 text-uppercase text-secondary">NASA's "Daily Blue Marble" API:</p>
        <hr />
        <h3 class="text-center my-4">Earth (Enhanced Image)</h3>
        <div class="container">
          <div class="text-center">
            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFRUXFRUVFRcXFRUVFRcVFRUWFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0mHR8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAwQBAgYFBwj/xAA6EAACAQIEAwUFBQcFAAAAAAAAAQIDEQQFITESQVEGE2FxkQciUoGhQoKxwdEUMnKSsuHwU2JkovH/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQIDBAX/xAAkEQEBAQACAgMBAAEFAAAAAAAAAQIDERIhBBMxQSIUI0JRYf/aAAwDAQACEQMRAD8A+GgAAAAAAAAAAAZAwZBkDAMgDFgZAGLAyANQZAGAAAAAAAAAAAAAAAAAAAAAAyDaMW9FqBqbQg3olc9fL8klPWWx0uBymEFsD9cphclqz5WPWw3Zb4mzrsNhb7I9KhgbFPJeYcthuylP4fU9Gj2YpfCvQ6anhlzLMaaRHmt9bmY9laL+wvQiq9iaD+wl5afgdYqpBWqX2ZX7U/S4jF9gKf2Jyj6M5/H9jsRT/dtNeGj9H+p9QcmzHAPuif8AT6/j4liKE4PhnFxfRqzIz7Lj8rp1o8NSCkvHl4p7p+RxmcdiZRvKg218L3+T5/T5lpyZquuLc/Y4wEtehKEnGUXFrdNNP0ZGaMmoMmAAAAAAAAAAAAAAAZCLuW4GVWVktObAjwWClUdorTmzq8ryWMOV2XcBgY00krHpU4ojWpE5xdNaVFIt0qV/A1glyLdKD+RhrkdOOFZw1NI9ClFFOBZizG8zqx8ZOmkayNUb8JjeaujPxoglEd0WYpGJ7XKXktbTgzIg4BwoiqVtV6GMRUaWhPtS+PV/8StGjga4CvxXT3LEkT3ZekTM1nuPFzfI6WIVpxTfJrSS8mfOe0PZuphfe/fpt6S6dFJcvPY+tRi+foa18PGcXGUU01Zpq6afJnTx83XquHm+PL7z+vhbMHTdrey8sK+8gnKi3vu4N7Rl4dH8vPmmjrl7cFnXqtQZMEoAAAAAAAAADaEbgTYTDuckkdllmGjCKSPJynB2R0eEo2K610tjHlVilTvyL1KgaUIlyCOXe3dx8UjNOmWYRNacCeKOe12ZzI2pxLEYnnd809GTYeU5Ssvn0RW5rTHJO+noKxlmP2XqyeFNJWtqY2x1yVC0Yto+n5ipIzB6WBYpRoc2TTo8nqTEvCX82U4orYbCqJtONi3KFvQjcSPLv2t9ck6ivwocBI4BwLTTLWENfDxnFxklKMk4yT1TT5M+Q9rezksHU0u6U2+7l0tvCX+5XXmrPql9nUdCtmuUU8VRnQqWSktJWu4TV+CovK+vVOSOvh5evVeb8rg/5T9fAWYLWY4KdGpOjUjwzhJxkvFO2nVeJWZ2vOYAAAAAAAAL2W0Lspwjd2OkyvDpWFvRPb1sFRsj0sJT5shoQ0PRw8NDm3XXx59p6UC5TiQ0kW6UTn1XdiJI6GtSYrxurChT6lOv60tvfURxhzPYwNPhhd7vUpUaV3rsX5yuZ8l79N+DHXtvHW/I3lAgTJVIwrtiCrAiiyxWZDwlozs9tkbxkR2NoICeNXk1cxYxFE1iFpEXCZ4SRIyokyq3LSEDacbE0UZqQNM1zcmO4+Ze1jJb8OMgulOr8tITf0j/ACnzVn6KzPL416NSjLacWvK63+X5H57xeHlTnKnJWlCUoy84uz/A9Th13l4PyMeO6gABqxAAAAAFnBQvI6zLaZzeVQ1OvwFOyRXf4vie3o0IF+kirRRdpROXVd3HE8EWKZDBFimYadeI2kiaETWEdSUpa1zltEliQxJOIzrox6SI2uaJi5Tpr5EmaVIu1kbU23rZrzJo077j8R15RDTV9SXuyWMEhYi1eZ6nthI3sLGUVWEjZIwbxJVsEzZu6saSNFIvKy1G8JfTc+Oe1XLu6xveJe7WhGfhxK8J/wBKf3j7CuvyZw3thwilhqNa2sKrg/4akW9fnTXqeh8bX8eL83H9fJAZMHY84AAAAAe5kkDrcLE5bJdkdZgnoU204/16FKJbporU2WqbOTT0ONYjEmpojiSxMK68RNE3aI4MkM66MwUjLZrY2jFkLNoEsERqJIkVrTMTwib2NIzN0yjWDRixsYISGULGUghm4bCMMlDMmRMkNJImKajDZ4PtBoOeXYjrFU5/y1YX+jZ7/wCh5faZ3wOLX/HqfRxZ1/H1/lHmfNz/AIV8DZgA9N4gAAAAA6DJXojq8Gzj8lkdbgmV2vx/r1qSLUEVKUy1TqI5NR340swJ4lZTX9zeOIWl3o9DK5dWd9LaRtFGkZoKsjLp0TUTIkiRKZjC1U2/P/NPIr00mvcizY2sUaKaqO7bTvbXbVuyXzfqXIztoV1npfG+/wBSIlTK6kmZTKdNJpO5G0WVXM3jUHS00sGLkSqGZVER0ntNc1ZHKoROqJEWyLKkJIrRmSd4T0pa3kjw+1dbhwOLb/0GvnKcI/mey6hyftDxCjgayv8Av93BeL72E7ekJeh1fHn+ced82/7dfHQAeo8IAAAAAepklT3jrsNVOIy6dpo63CzIv4mfr2KdYlp1LFGlMmUzGx0Z09WE9FYl4bplHD1NC5TnfQxs6dOdSnePqxUxDXI2kktLkOIp6/gROlrbG0as21bb6F/CVbPU8dSaT13/AM0JqF477b9W/Eaz2nHJZe3r1qy4ou/6l1M5yWIbd9kWaWKdnqY64vTp4/kdWvbUhxHmftcndPR25Pr4k8cYufzM/rronPKt8RlMqTxK0a/uTQloiLmxackt9J+I1uaOolua1qtlcr4refSVO44StHGK1vArTxj1Vy046z1zZj1DLkeOsW7lqOJTt5O5b67Gf3yrcpHz32o473aVHrJ1H91OK/ql6Hd1Kmn1Pj3bTG97i6jW0LU193f/ALOR0/Gz77cHzeT108IAHc8wAAAAAbU5Wdzq8srcUUckevkmJs7AdZTRYgR4SSZfpwRnY1ze0dOZYpzNKlHmkTUqdkZWxtmVI5czDZrEkgijWVJGmr3IFBttN7Fjfc3lFFO+m0z2pwjqZpwXPZdf/CXhW5ru78ie1em7dloaU3bU0nO+2xpGW++o6TauKeiuWI4pnmt9SaMitytndi9UrN8zFStdW8CpxamzqFfFfzbuSRHPdWenMzOW31I3Kz3/AFLyM7WakuXjqZjU5IS2/Ahi9S0nbPWukme5mqNCVT4Y+74yekV6nx2Um229W9X5s672gZjeUMPF6RSlP+Jr3U/JO/3jkDp48eMcXLvzrAANGQAAAAAG9KfC0zQAdnlGL4oo96jUPnmV4505eB3WXVlON1qRqdpzenpxkTxK9ItRjzOfWXXjUO7ua93qTtmLczK10TMqNpo2lfY1mrmvE7kdrdWNmrI0b6G/cN7lmjQS/uVupF5i1VhEzwb9S5OlbYrNtvYTXZrHTSMem4cG9LaIkjpfQ3pV0rqxZXr/ALV3B32N4w9SVNN3Zo2TFb6YUNvUTp+GrJaMXr5dRKGpPVVtnSvKNtyhmeYQw8HUly2XWXJFzGVo04ynOVoxV22fMs+zeWIqX1UFpCPRdX4s248d3uubl5PXUUcTXlUnKcneUm234siAN3MwAAgAAAAAAAAPXyXNXSkk3oeQZA+p5fjIzV00z0Ez5XluaTpPR6dDssszhVEnxEaz2tnXTpYyF7lWnUT5m3edDn1l1Y5KsWNVuawkbJGVy6JuLEWkZ75EPC9rGO6dyPrX+/r8Tyq3fKxFKoZhRbdknctSyyp8N/LUmY6UvN2qXe7NeHnc9Glk9V/ZaXjoXMP2cnJ+++FeG78i3XSl5HgttmsabudfT7LQT1lJ+G25u8lpx0Jln8U1qucoppbfr5vwIMbXUISnNqMUrts9bOsfhsHBzqyS6c5SfSMeZ8d7U9qKuMlr7lJP3YL6OXV/gb445+1z75b+RH2kz6WJlwxuqaei5yfxS/JcjxADRkAGAgAAAAAAAAAAAAAZJKNaUHeLsRGQOlyvP0tJ6HRYXNIvmfOCWjiZR2Y6lT3Y+s4fEJno0aV3ZP56nyrB9oZw3V/I6DA9sore6I8ItN19DoYPXVno0KEI6Kzv1SucJQ7Z03z+pdp9rodfqVuFpt3kZU1sl+ZPSqJcj59LtfDqvUr1u3EF9uKM7xL/AGPp/wC0pc0zWeYxWrPj2K9oCWzlLyR4uO7d4iekLRXV6sT48/qt5H2bMu0VOCbnJRS3baR8+7Re01K8MNHifxvSK8luz5vjMdUqu9ScpvxenyWyK5rnGc/kZ3VqxmGPq15upVm5yfN8vBLkvBFYAsgAAAwAEAAAAAAAAAAAAAAZMADIACQAADJgAZBgAZMAAAAAAAAGAEAAAAAAAAAAAAAAAAAAAGQAAACQAAAAAAAAAAAABgABAAAAAAAAD//Z" class="rounded img-fluid" />
          </div>
          <div class="row my-3">
            <p>{{this.results[0].caption}}</p>
            <p>The EPIC API provides information on the daily imagery collected by DSCOVR's Earth Polychromatic Imaging Camera (EPIC) instrument. Uniquely positioned at the Earth-Sun Lagrange point, EPIC provides full disc imagery of the Earth and captures unique perspectives of certain astronomical events such as lunar transits using a 2048x2048 pixel CCD (Charge Coupled Device) detector coupled to a 30-cm aperture Cassegrain telescope.</p>
          </div>
          <div class="row my-3">
            <p>{{results}}</p>
          </div>
        </div>

        <hr />
        <div class="text-center">
          <a
            href="https://epic.gsfc.nasa.gov/about/api"
            target="_blank"
            rel="noopener"
          >Link to NASA EPIC API</a>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
window.axios = require("axios");

export default {
  name: "NASAepic",
  data() {
    return {
      data: "NASA EPIC",
      results: {},
      results2: {}
    };
  },
  mounted() {
    let oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 9);
    const lastYear = oneWeekAgo.getFullYear();
    const lastMonth = addZero(oneWeekAgo.getMonth() + 1);
    const lastDay = oneWeekAgo.getDate() + 1;
    const baseURL = `https://epic.gsfc.nasa.gov/api/enhanced/date/${lastYear}-${lastMonth}-${lastDay}`;

    window.axios
      .get(baseURL)
      .then(response => {
        this.results = response.data;
      })
      .catch(error => console.log(error));

    const fileName = this.results[0].image;
    const imageURL = fetchImageUrl(fileName);
    console.log(imageURL);

    function addZero(month) {
      if (month < 10) {
        return `0${month}`;
      } else {
        return month;
      }
    }
    function fetchImageUrl(location) {
      const imageFileName = location;
      return `https://epic.gsfc.nasa.gov/archive/enhanced/${lastYear}/${lastMonth}/${lastDay}/png/${imageFileName}.png`;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>