const moment = require("moment");

module.exports = {
  formatDate: function (date, format) {
    return moment(date).utc().format(format);
  },
  // reduz texto do card da historia
  truncate: function (str, len) {
    if (str.length > len && str.length > 0) {
      let new_str = str + " ";
      new_str = str.substr(0, len);
      new_str = str.substr(0, new_str.lastIndexOf(" "));
      new_str = new_str.length > 0 ? new_str : str.substr(0, len);
      return new_str + "...";
    }
    return str;
  },
  // remove tags html do texto
  stripTags: function (input) {
    return input.replace(/<(?:.|\n)*?>/gm, "");
  },
  // icone de editar historia no card
  editIcon: function (storyUser, loggedUser, storyId, floating = true) {
    // se o usuario dono da historia eh o mesmo que esta logado
    // o botao de editar aparece
    if (storyUser._id.toString() == loggedUser._id.toString()) {
      if (floating) {
        return `<a href="/stories/edit/${storyId}" class="btn-floating halfway-fab blue"><i class="fas fa-edit fa-small"></i></a>`;
      } else {
        return `<a href="/stories/edit/${storyId}"><i class="fas fa-edit"></i></a>`;
      }
    } else {
      return "";
    }
  },
  select: function (selected, options) {
    return options
      .fn(this)
      .replace(
        new RegExp(' value="' + selected + '"'),
        '$& selected="selected"'
      )
      .replace(
        new RegExp(">" + selected + "</option>"),
        ' selected="selected"$&'
      );
  },
};
