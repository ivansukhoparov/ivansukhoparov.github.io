const filterForm = document.querySelector('#catalog-filter')
const sliderWrapper = filterForm.querySelector('.range-custom__container');
const inputMinPrice = filterForm.querySelector('#min-price');
const inputMaxPrice = filterForm.querySelector('#max-price');

const inputOnlyNumbers = function(evt) {
	// Разрешаем: backspace, delete, tab и escape
	if ( evt.keyCode == 46 || evt.keyCode == 8 || evt.keyCode == 9 || evt.keyCode == 27 ||
		// Разрешаем: Ctrl+A
		(evt.keyCode == 65 && evt.ctrlKey === true) ||
		// Разрешаем: home, end, влево, вправо
		(evt.keyCode >= 35 && evt.keyCode <= 39)) {
				// Ничего не делаем
		return;
	} else {
		// Запрещаем все, кроме цифр на основной клавиатуре, а так же Num-клавиатуре
		if ((evt.keyCode < 48 || evt.keyCode > 57) && (evt.keyCode < 96 || evt.keyCode > 105 )) {
			evt.preventDefault();
		}
	}
}

sliderWrapper.innerHTML = '';

noUiSlider.create(sliderWrapper, {
  start:[0,15000],
  connect:true,
  range: {
    'min': 0,
    'max':20000
  },
  step:100,
  format: {
    to: function (value) {
        return value.toFixed(0);
    },
    from: function (value) {
      return parseFloat(value);
    },
  }

})

sliderWrapper.noUiSlider.on('update', ((values,handle)=>{
  inputMinPrice.value = values[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  inputMaxPrice.value = values[1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}))


inputMinPrice.addEventListener('change',(()=>{
  sliderWrapper.noUiSlider.updateOptions({
    start:[inputMinPrice.value,inputMaxPrice.value],
  });
  inputMinPrice.value=inputMinPrice.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
}))


inputMaxPrice.addEventListener('change',(()=>{
  sliderWrapper.noUiSlider.updateOptions({
    start:[inputMinPrice.value,inputMaxPrice.value],
  });
  inputMaxPrice.value=inputMaxPrice.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
}))

inputMinPrice.addEventListener('keydown',  inputOnlyNumbers);
inputMaxPrice.addEventListener('keydown', inputOnlyNumbers);

filterForm.addEventListener('submit', ((evt)=>{
  evt.preventDefault();
}))
