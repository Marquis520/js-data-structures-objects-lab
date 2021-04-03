// Write your solution in this file!
const driver = {}
beforeEach(function () {
    for (const key in driver) {
      delete driver[key];
    }

    driver.name = 'Sam';
  });
function updateDriverWithKeyAndValue(driver, key, value){
    return Object.assign({}, driver, { [key]: value });
}
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    driver [key] = value;
    return driver;
}
function deleteFromDriverByKey(driver, key){
    const newObj = Object.assign({}, driver);
    delete newObj [key];
    return newObj;
}
function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver [key];
    return driver;
}