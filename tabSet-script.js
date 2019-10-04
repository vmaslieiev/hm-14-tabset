const TAB_CONTAINER_CLASS = 'wrap';
const TAB_TITLE_CLASS = 'tabset-title';
const TAB_ACTIVE_CLASS = 'active';

class Tabset{
  constructor(el){
    this.el = el;

    this.bindClasses();
    this.bindEventListener();
  }

  static isElementToggled(el){
    return el.classList.contains(TAB_ACTIVE_CLASS);
  }

  static showElement(el){
    return el.classList.add(TAB_ACTIVE_CLASS);
  }

  static hideElement(el){
    return el.classList.remove(TAB_ACTIVE_CLASS);
  }

  bindClasses(){
    this.el.classList.add(TAB_CONTAINER_CLASS);
  }

  bindEventListener(){
    this.el.addEventListener('click', this.onElementClick);
  }

  onElementClick(e){
    if(e.target.classList.contains(TAB_TITLE_CLASS)){
      const isVisible = Tabset.isElementToggled(e.target.parentElement);

      Array.prototype.forEach.call(this.children, Tabset.hideElement);

      if(!isVisible){
        Tabset.showElement(e.target.parentElement);
      }
    }
  }
}

const myTabset = new Tabset(document.getElementById('container'));