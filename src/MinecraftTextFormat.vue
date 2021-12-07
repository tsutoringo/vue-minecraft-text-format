<script>
import { h } from 'vue';

export default {
  props: {
    text: {
      type: String,
      required: true
    },
    prefix: {
      type: String,
      default: '§'
    }
  },
  render () {
    const splited = this.text.split(`${this.prefix}r`);
    const childs = [];

    const child = text => {
      const color = text.match(/§[0-9a-fk-or]/g);

      if (color) {
        const colorCode = color[0].replace(this.prefix, '');
        const index = text.indexOf(color[0]);

        const before = text.substring(0, index);
        const after = text.substring(index + color[0].length);

        return [
          before,
          h('span', {
            class: [
              `c-${colorCode}`
            ]
          }, child(after))
        ];
      } else {
        return text;
      }
    }

    for (let i = 0; i < splited.length; i++) {
      childs.push(h('span', {}, child(splited[i])));
    }

    return h('span', {
      class: [ 'minecraft-text-format' ]
    }, childs);
  }
};
</script>
<style scoped>
.minecraft-text-format {
    color: #fff;
}
.minecraft-text-format .c-0 {
    color: #000;
}
.minecraft-text-format .c-1 {
    color: #0000AA;
}
.minecraft-text-format .c-2 {
    color: #00AA00;
}
.minecraft-text-format .c-3 {
    color: #00AAAA;
}
.minecraft-text-format .c-4 {
    color: #AA0000;
}
.minecraft-text-format .c-5 {
    color: #AA00AA;
}
.minecraft-text-format .c-6 {
    color: #FFAA00;
}
.minecraft-text-format .c-7 {
    color: #AAAAAA;
}
.minecraft-text-format .c-8 {
    color: #555555;
}
.minecraft-text-format .c-9 {
    color: #5555FF;
}
.minecraft-text-format .c-a {
    color: #55FF55;
}
.minecraft-text-format .c-b {
    color: #55FFFF;
}
.minecraft-text-format .c-c {
    color: #FF5555;
}
.minecraft-text-format .c-d {
    color: #FF55FF;
}
.minecraft-text-format .c-e {
    color: #FFFF55;
}
.minecraft-text-format .c-f {
    color: #FFFFFF;
}
.minecraft-text-format .c-g {
    color: #DDD605;
}
.minecraft-text-format .c-l {
    font-weight: bold;
}
.minecraft-text-format .c-m {
    text-decoration: line-through;
}
.minecraft-text-format .c-n {
    text-decoration: underline;
}
.minecraft-text-format .c-o {
    font-style: italic;
}
</style>
