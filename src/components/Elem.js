export default function Elem(props){
    function katt(data){
        console.log("app: ", data);
        props.katt(props.index)
    }
    return(
        <div className="elem" onClick={() => katt(katt)}>
            {props.elem}
        </div>
    );
}