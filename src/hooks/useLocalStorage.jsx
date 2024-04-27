const STORAGE_KEY = "DRAGGABLE_TODO"

export const useLocalStorage = () => {

    function getStorageData(){
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    }

    function setStorageData(data){
        localStorage.setItem(STORAGE_KEY,JSON.stringify(data));
    }
    
  return {getStorageData, setStorageData}
}

