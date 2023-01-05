import  { useEffect, useState , useContext} from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";
const URL_CLOUD = "https://api.cloudinary.com/v1_1/dad87vqdp/image/upload";
import ReceiptsServices from "../services/receiptServices";
const initialOption={
  query:"",
  payload:{
    state:"",
    endDate:"",
    initialDate:""
  }
}
export const useReceiptApi = (typeReceipt = null) => {
  const navigate = useNavigate();
  const { token, logout } = useContext(UserContext);
  const ReceiptServices = new ReceiptsServices(token);
  const [receiptsAll, setReceiptsAll] = useState([]);
  const[options, setOptions]= useState(initialOption)
  const [refresh,setRefresh]= useState(false)
  const [loading, setLoading] = useState(true);
  const [infoReceipts,setInfoReceipts]= useState({})
  const [receipt, setReceipt] = useState(null);
  useEffect(() => {
    if (!typeReceipt) {
      return;
    }
    
    ReceiptServices.getReceipts( typeReceipt, options )
      .then((res) => {
        setReceiptsAll(res.receipts);
        const newInfoReceipts={
          sumVentas:res.sumVentas,
          sumComicion: res.sumComicion,
          sumTotal:res.dinnerTotal
        }
      
        setInfoReceipts(newInfoReceipts)
        setLoading(false)
      })
      .catch((err) => {
        logout();
        navigate("/login");
      });
  }, [options,typeReceipt,refresh]);

  const getReceiptsByOptions=(newOptions)=>{
    setLoading(true)
    setOptions(newOptions)
  };
  const saveReceiptApi = async (body) => {
    try {
      const path = body.typeReceipt.toLowerCase();
      const res = await ReceiptServices.saveReceipt({ body, path });
      setReceipt(res.receipt);
      setLoading(true);
    } catch (error) {
      logout();
      navigate('/login')
    }
  };
  const getSearchById=(id)=>{

    const receiptsSearched= searchById(id,receiptsAll) 
    if(!id){
      setRefresh(!refresh);
      setLoading(!loading)
      return;
    }
    setReceiptsAll(receiptsSearched)
  }
  const getOne = async ({ path, id }) => {
    try {
      const res = await ReceiptServices.getOneReceipt({ path, id });
      setReceipt(res);
      console.log(res)
      setLoading(false);
    } catch (error) {
      console.log(error);
      logout();
      navigate("/login");
    }
  };
  const updateReceipt=async({path,id,payload})=>{
    try {
       const res= await ReceiptServices.updateReceipt({path,id,payload});
       console.log(res);
       setLoading(false)
       setRefresh(true);
    } catch (error) {
      console.log(error);
    }
  }
  const uploadVoucher=async(data)=>{
   try {
    setLoading(true)
    const res = await fetch(URL_CLOUD, {
      method: "POST",
      body: data,
    });
    const file = await res.json();
    const urlVoucher= file.secure_url;
    const params={
      path: receipt.typeReceipt.toLowerCase(),
      id: receipt.id,
      payload: {
        urlVoucher,
        state:true      
      }
    }
    console.log('se inicio la subida del vouvher')
    await updateReceipt(params)
   } catch (error) {
    console.log(error)
   }
  }
  const deleteReceipt=async(path,id)=>{
    try {
      setLoading(true);
      ReceiptServices.deleteReceipt(path,id).then(res=> console.log(res)).finally(()=> {
        setLoading(false),
        navigate('/recibos/'+path)
      })
      
    } catch (error) {
      console.log(error)
    }
  }
  return [
    { loading, infoReceipts, receiptsAll, typeReceipt, receipt,refresh },
    {
      saveReceiptApi,
      getOne,
      updateReceipt,
      uploadVoucher,
      setRefresh,
      setLoading,
      getSearchById,
      getReceiptsByOptions,
      deleteReceipt
    },
  ];
};

const searchById =(id,list)=>{
  const receipts= list.filter(i=>i.id.toString().includes(id));
  return receipts
}