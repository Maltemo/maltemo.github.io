Vue.component('write-up', {
  template: `<tr>
                    <td v-text="writeup.ctf"></td>
                    <td v-text="writeup.challenge_type"></td>
                    <td><a :href="urlMaker(writeup)" class="write_up_link" target="_blank">{{writeup.title}}</a></td>
                    <td v-text="writeup.points"></td>
                    <td v-text="writeup.date.toLocaleDateString()"></td>
                    <td v-text="writeup.tags"></td>
            </tr>`,
  props: ['writeup'],
  methods: {
    "urlMaker" : function(wu){
        let wu_title = wu.title.split(" ").join("_");
        wu_title = wu_title.replace(/[^\w\s]/gi, '');
        return `write-ups/${wu.ctf}_${wu.date.getFullYear()}_${wu.challenge_type}_${wu_title}.html`;
    },
  },
});
