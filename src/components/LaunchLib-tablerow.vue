<template>
  <tr>
    <th scope="row">
      {{ mission }}
    </th>
    <th>
      {{ rocket }},
      <br />
      {{ launchsp }}
    </th>
    <td>
      {{ utcTranslate(launchtime) }}
    </td>
    <td>
      {{ pad }},
      {{ location }}
    </td>
    <td>
      {{ charCount(description, limit) }}
    </td>
  </tr>
</template>


<script>
export default {
  name: "tablerow",
  data() {
    return {
      limit: 350,
    };
  },
  props: {
    mission: String,
    rocket: String,
    launchsp: String,
    launchtime: String,
    pad: String,
    location: String,
    description: String,
  },
  methods: {
    utcTranslate(results) {
      var local = new Date(results).toLocaleString();
      return local;
    },
    charCount(results, limit) {
      if (results.length > limit) {
        return results.slice(0, limit) + "...";
      } else {
        return results;
      }
    },
  },
};
</script>

