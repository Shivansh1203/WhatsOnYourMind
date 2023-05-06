const AppContext = React.createContext();

const AppProvider = ({children}) =>{

    return <AppContext.Provider value={shivansh}>{children}</AppContext.Provider>
    
}