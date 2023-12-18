import React, {useContext, useState} from 'react';

const InfoContext = React.createContext(null);
const UpdateInfoContext = React.createContext(null);

export const useInfoContext = () => {
    return useContext(InfoContext);
};
  
export const useUpdateInfoContext = () => {
    return useContext(UpdateInfoContext);
};

export const InfoContextProvider = ({children}) => {
    const [infoVisibility, setInfoVisibility] = useState(false);

    const setVisibility = () => {
        setInfoVisibility(!infoVisibility);
    };
    
      return (
        <InfoContext.Provider value={infoVisibility}>
          <UpdateInfoContext.Provider value={setVisibility}>
            {children}
          </UpdateInfoContext.Provider>
        </InfoContext.Provider>
      );
    };

