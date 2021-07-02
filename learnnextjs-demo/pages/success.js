import Layout from "../components/MyLayout";

const Content = (props) => (
    <div>
        <h1>Success!!</h1>
        <p>{props.id}</p>
        <p>{props.pw}</p>
    </div>

)

export default (props) => (
    <Layout>
        <Content url={props.params}/>
    </Layout>
)