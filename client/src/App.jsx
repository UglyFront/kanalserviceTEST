import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Filter from "./components/filter/Filter";
import Pages from "./components/pages/Pages";
import Table from "./components/table/Table";
import { actions } from "./redux/actions";


function App() {
  const {limit, page, filter, type, value} = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.getData(limit, page, filter, type, value))
  }, [limit, page, filter, type, value]) // опрашиваем сервер универсальным запросом при изменении зависимостей и при первой монтировке приложения


  return (
    <div className="App">
        <div className="content">
          <Filter/>
          <Table/>
          <Pages/>
        </div>
    </div>
  );
}

export default App;
