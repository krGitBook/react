## 项目中代码清晰规范

### 1.方法规范

**在我们项目中会用到很多方法，为了清晰找到什么功能对应的方法以及写法规范：**

```
 (1).打开的方法一律用open开头且不同打开要用单词分清，如:openAddCustomer、

 openEditCustomer

 (2).关闭的一律用cancel开头且不同打开要用单词分清，如：cancelAddCustomer、

 cancelEditCustomer

 (3).提交的方法一律用submit开头且不同打开要用单词分清，如:submitAddCustomer、

 submitEditCustomer

 (4).涉及到生命周期的一律写到对象最上面且按生命周期排列

 (5).上面的不涉及到数据的(打开或者关闭)这些一律写到render下面且相同开头的写到一起

 (6).涉及到数据的都写到render上面

```

### 2.render规范

**为了render数据的清晰：**

```
render里面涉及到静态html(不涉及数据的)可以抽成一个方法调用；
render里面有form的，可以把form中不涉及到接受数据和事件的表单放在一个方法中调用

```
