const effects = document.getElementById("effectsOptionForm");
const itensityJust = document.getElementById("itensityJust");
const image = document.querySelector("#image")
const getFilter = () => effects.value ?? 'none' 

const getIntensity = () => itensityJust.value ?? 0

const getMetric = effect => {
    if (effect == 'blur') return 'px';
    if (effect == 'hue-rotate') return 'deg';
    return '%';
}

const setFilter = () => {
    const appliedFilter = getFilter()
    const valueIntensity = getIntensity() + getMetric(appliedFilter);
    const image = document.getElementById("image");
    image.style.filter = `${appliedFilter}(${valueIntensity})`
}

itensityJust.addEventListener("click", setFilter)
effects.addEventListener("click", setFilter)