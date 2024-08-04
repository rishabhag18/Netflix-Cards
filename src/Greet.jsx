function Greet(){
    let Name="Rishabh";
    let read=0;
    return <div>
        <p>Hello {Name}, How are you. <br />Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum accusamus alias doloribus nulla placeat nisi sapiente repudiandae totam ut quisquam magni iste, harum aliquam atque expedita facere natus nemo neque.</p>
        <h6>Read Count is: {++read}</h6>
    </div>
}
export default Greet;