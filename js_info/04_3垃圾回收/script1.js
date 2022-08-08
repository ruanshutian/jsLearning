"use strict"

// user 具有对这个对象的引用
let user = {
    name: "John"
  };
  user = null;
//现在 John 变成不可达的了。因为没有引用了，就不能访问到它了。垃圾回收器会认为它是垃圾数据并进行回收，然后释放内存。



function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;
  
    return {
      father: man,
      mother: woman
    }
  }
  let family = marry({
    name: "John"
  }, {
    name: "Ann"
  });
  delete family.father;
delete family.mother.husband;
//对外引用不重要，只有传入引用才可以使对象可达。所以，John 现在是不可达的，
//并且将被从内存中删除，同时 John 的所有数据也将变得不可达。

/**
 * 主要需要掌握的内容：

垃圾回收是自动完成的，我们不能强制执行或是阻止执行。
当对象是可达状态时，它一定是存在于内存中的。
被引用与可访问（从一个根）不同：一组相互连接的对象可能整体都不可达，正如我们在上面的例子中看到的那样
 */