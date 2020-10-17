//ADDING ROWS TO MENU TABLE

//for creating random time
let periods=["am", "pm"]
//for creating random names in menuList
let listName=['Movie','Anime','Game','Book', 'Software', 'Documentary', 'Music'];
//menu-item-data
let menuList = [
  {
    name: listName[Math.floor(7*Math.random())],
    se: Math.floor(133*Math.random()),
    le: Math.floor(133*Math.random()),
    time: `${Math.floor(12*Math.random())}:${Math.floor(12*Math.random())} ${periods[Math.floor(2*Math.random())]}`,
    size: Math.floor(13*Math.random()+1)+"GB",
    uploader:"Adam"
  },
  {
    name: listName[Math.floor(7*Math.random())],
    se: Math.floor(133*Math.random()),
    le: Math.floor(133*Math.random()),
    time: `${Math.floor(12*Math.random())}:${Math.floor(12*Math.random())} ${periods[Math.floor(2*Math.random())]}`,
    size: Math.floor(13*Math.random()+1)+"GB",
    uploader:"Adam"
  },
  {
    name: listName[Math.floor(7*Math.random())],
    se: Math.floor(133*Math.random()),
    le: Math.floor(133*Math.random()),
    time: `${Math.floor(12*Math.random())}:${Math.floor(12*Math.random())} ${periods[Math.floor(2*Math.random())]}`,
    size: Math.floor(13*Math.random()+1)+"GB",
    uploader:"Adam"
  },
  {
    name: listName[Math.floor(7*Math.random())],
    se: Math.floor(133*Math.random()),
    le: Math.floor(133*Math.random()),
    time: `${Math.floor(12*Math.random())}:${Math.floor(12*Math.random())} ${periods[Math.floor(2*Math.random())]}`,
    size: Math.floor(13*Math.random()+1)+"GB",
    uploader:"Adam"
  },
  {
    name: listName[Math.floor(7*Math.random())],
    se: Math.floor(133*Math.random()),
    le: Math.floor(133*Math.random()),
    time: `${Math.floor(12*Math.random())}:${Math.floor(12*Math.random())} ${periods[Math.floor(2*Math.random())]}`,
    size: Math.floor(13*Math.random()+1)+"GB",
    uploader:"Adam"
  },
  {
    name: listName[Math.floor(7*Math.random())],
    se: Math.floor(133*Math.random()),
    le: Math.floor(133*Math.random()),
    time: `${Math.floor(12*Math.random())}:${Math.floor(12*Math.random())} ${periods[Math.floor(2*Math.random())]}`,
    size: Math.floor(13*Math.random()+1)+"GB",
    uploader:"Adam"
  },
  {
    name: listName[Math.floor(7*Math.random())],
    se: Math.floor(133*Math.random()),
    le: Math.floor(133*Math.random()),
    time: `${Math.floor(12*Math.random())}:${Math.floor(12*Math.random())} ${periods[Math.floor(2*Math.random())]}`,
    size: Math.floor(13*Math.random()+1)+"GB",
    uploader:"Adam"
  },
  {
    name: listName[Math.floor(7*Math.random())],
    se: Math.floor(133*Math.random()),
    le: Math.floor(133*Math.random()),
    time: `${Math.floor(12*Math.random())}:${Math.floor(12*Math.random())} ${periods[Math.floor(2*Math.random())]}`,
    size: Math.floor(13*Math.random()+1)+"GB",
    uploader:"Adam"
  },
  {
    name: listName[Math.floor(7*Math.random())],
    se: Math.floor(133*Math.random()),
    le: Math.floor(133*Math.random()),
    time: `${Math.floor(12*Math.random())}:${Math.floor(12*Math.random())} ${periods[Math.floor(2*Math.random())]}`,
    size: Math.floor(13*Math.random()+1)+"GB",
    uploader:"Adam"
  },
  {
    name: listName[Math.floor(7*Math.random())],
    se: Math.floor(133*Math.random()),
    le: Math.floor(133*Math.random()),
    time: `${Math.floor(12*Math.random())}:${Math.floor(12*Math.random())} ${periods[Math.floor(2*Math.random())]}`,
    size: Math.floor(13*Math.random()+1)+"GB",
    uploader:"Adam"
  },
  {
    name: listName[Math.floor(7*Math.random())],
    se: Math.floor(133*Math.random()),
    le: Math.floor(133*Math.random()),
    time: `${Math.floor(12*Math.random())}:${Math.floor(12*Math.random())} ${periods[Math.floor(2*Math.random())]}`,
    size: Math.floor(13*Math.random()+1)+"GB",
    uploader:"Adam"
  },
  {
    name: listName[Math.floor(7*Math.random())],
    se: Math.floor(133*Math.random()),
    le: Math.floor(133*Math.random()),
    time: `${Math.floor(12*Math.random())}:${Math.floor(12*Math.random())} ${periods[Math.floor(2*Math.random())]}`,
    size: Math.floor(13*Math.random()+1)+"GB",
    uploader:"Adam"
  },
  {
    name: listName[Math.floor(7*Math.random())],
    se: Math.floor(133*Math.random()),
    le: Math.floor(133*Math.random()),
    time: `${Math.floor(12*Math.random())}:${Math.floor(12*Math.random())} ${periods[Math.floor(2*Math.random())]}`,
    size: Math.floor(13*Math.random()+1)+"GB",
    uploader:"Adam"
  },
  {
    name: listName[Math.floor(7*Math.random())],
    se: Math.floor(133*Math.random()),
    le: Math.floor(133*Math.random()),
    time: `${Math.floor(12*Math.random())}:${Math.floor(12*Math.random())} ${periods[Math.floor(2*Math.random())]}`,
    size: Math.floor(13*Math.random()+1)+"GB",
    uploader:"Adam"
  },
  {
    name: listName[Math.floor(7*Math.random())],
    se: Math.floor(133*Math.random()),
    le: Math.floor(133*Math.random()),
    time: `${Math.floor(12*Math.random())}:${Math.floor(12*Math.random())} ${periods[Math.floor(2*Math.random())]}`,
    size: Math.floor(13*Math.random()+1)+"GB",
    uploader:"Adam"
  },
  {
    name: listName[Math.floor(7*Math.random())],
    se: Math.floor(133*Math.random()),
    le: Math.floor(133*Math.random()),
    time: `${Math.floor(12*Math.random())}:${Math.floor(12*Math.random())} ${periods[Math.floor(2*Math.random())]}`,
    size: Math.floor(13*Math.random()+1)+"GB",
    uploader:"Adam"
  },
  {
    name: listName[Math.floor(7*Math.random())],
    se: Math.floor(133*Math.random()),
    le: Math.floor(133*Math.random()),
    time: `${Math.floor(12*Math.random())}:${Math.floor(12*Math.random())} ${periods[Math.floor(2*Math.random())]}`,
    size: Math.floor(13*Math.random()+1)+"GB",
    uploader:"Adam"
  },
  {
    name: listName[Math.floor(7*Math.random())],
    se: Math.floor(133*Math.random()),
    le: Math.floor(133*Math.random()),
    time: `${Math.floor(12*Math.random())}:${Math.floor(12*Math.random())} ${periods[Math.floor(2*Math.random())]}`,
    size: Math.floor(13*Math.random()+1)+"GB",
    uploader:"Adam"
  },
  {
    name: listName[Math.floor(7*Math.random())],
    se: Math.floor(133*Math.random()),
    le: Math.floor(133*Math.random()),
    time: `${Math.floor(12*Math.random())}:${Math.floor(12*Math.random())} ${periods[Math.floor(2*Math.random())]}`,
    size: Math.floor(13*Math.random()+1)+"GB",
    uploader:"Adam"
  },
  {
    name: listName[Math.floor(7*Math.random())],
    se: Math.floor(133*Math.random()),
    le: Math.floor(133*Math.random()),
    time: `${Math.floor(12*Math.random())}:${Math.floor(12*Math.random())} ${periods[Math.floor(2*Math.random())]}`,
    size: Math.floor(13*Math.random()+1)+"GB",
    uploader:"Adam"
  }


];
//creating table rows using menuList
let rows='';
menuList.forEach(item => {
  rows+= `<tr>
            <td class="px-2">
              <i class="fas fa-file-export mr-2"></i><a href="file-template.html">${item.name} #${Math.floor(6*Math.random()+1)}</a>
            </td>
            <td class="px-2 text-center">${item.se}</td>
            <td class="px-2 text-center">${item.le}</td>
            <td class="px-2 text-center">${item.time}</td>
            <td class="px-2 text-center">${item.size}</td>
            <td class="px-2 text-center">${item.uploader}</td>
          </tr>`;
});
//adding rows to HTML
document.getElementById('Tbody').innerHTML=rows;
