if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

document.querySelectorAll(".dropdown1").forEach(function (dropDownWrapper) {
  const dropDownBtn = dropDownWrapper.querySelector(".dropdown__button");
  const dropDownList = dropDownWrapper.querySelector(".dropdown__list");
  const dropDownListItems = dropDownList.querySelectorAll(
    ".dropdown__list-item"
  );

  const dropDownInput = dropDownWrapper.querySelector(
    ".dropdown__input-hidden"
  );

  // Клик по кнопке. Открыть/Закрыть select
  dropDownBtn.addEventListener("click", function (e) {
    dropDownList.classList.toggle("dropdown__list--visible");
    this.classList.add("dropdown__button--active");
  });

  // Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
  dropDownListItems.forEach(function (listItem) {
    listItem.addEventListener("click", function (e) {
      e.stopPropagation();
      dropDownBtn.innerText = this.innerText;
      dropDownBtn.focus();
      dropDownInput.value = this.dataset.value;
      dropDownList.classList.remove("dropdown__list--visible");
    });
  });

  // Клик снаружи дропдауна. Закрыть дропдаун
  document.addEventListener("click", function (e) {
    if (e.target !== dropDownBtn) {
      dropDownBtn.classList.remove("dropdown__button--active");
      dropDownList.classList.remove("dropdown__list--visible");
    }
  });
});
