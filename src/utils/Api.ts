export const buildBody = (params: any) => {
  const formData = new FormData();
  const data: any = {};
  Object.entries(params)
      .forEach(([key, value]) => {
          if (value instanceof Blob){
              formData.append(key, value);
          }
          else
              data[key] = value;
      });
  formData.append("data", JSON.stringify(data));
  
  return formData;
};  