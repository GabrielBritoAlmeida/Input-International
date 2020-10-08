
export type SearchStringProps = {
  list: Array<{
    name: string
  }>,
  _name: string,
  itemList: string

}

const SearchString = ({list, _name, itemList}: SearchStringProps) => {

    const name = list.filter((item) => {
      const sizeName = _name.length;
      if (sizeName > 0) {
        if (item[itemList][0].toUpperCase() === _name[0].toUpperCase()) {
          let verify = false;
          for (let i = 0; i < sizeName; i++) {
            if (item[itemList][i]) {
              if (
                item[itemList][i].toUpperCase() ===
                _name[i].toUpperCase()
              ) {
                verify = true;
              } else {
                verify = false;
                break;
              }
            }
          }

          if (verify) {
            return item[[itemList]];
          }
        }
      }
    });

    return name;
};


export default searchString;
