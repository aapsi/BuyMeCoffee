import styled from 'styled-components';
import './Coffee.css';

const Vapour1 = styled.span`--v:1;`;
const Vapour2 = styled.span`--v:2;`;
const Vapour3 = styled.span`--v:3;`;
const Vapour4 = styled.span`--v:4;`;
const Vapour5 = styled.span`--v:5;`;
const Vapour6 = styled.span`--v:6;`;
const Vapour7 = styled.span`--v:7;`;
const Vapour8 = styled.span`--v:8;`;
const Vapour9 = styled.span`--v:9;`;
const Vapour10 = styled.span`--v:10;`;
const Vapour11 = styled.span`--v:11;`;
const Vapour12 = styled.span`--v:12;`;

const Coffee = props => {

    // const nextStep = (size) => {
    //     props.nextStep(size);
    // }

    // const clickedItem = (item) => {
    //     props.clickedItem(item);
    // }

    // const clickedSize = (size) => {
    //     nextStep(size);
    //     clickedItem(size);
    // }

    // let style = {
    //     height: props.size === 'small' ? '200px' : 
    //     props.size === 'medium' ? '250px' : ''
    // };

    return (
        <div>
            <div className="coffee">
                <div className="vapour">
                    <Vapour1></Vapour1>
                    <Vapour2></Vapour2>
                    <Vapour5></Vapour5>
                    <Vapour4></Vapour4>
                    <Vapour6></Vapour6>
                    <Vapour3></Vapour3>
                    <Vapour7></Vapour7>
                    <Vapour8></Vapour8>
                    <Vapour9></Vapour9>
                    <Vapour10></Vapour10>
                    <Vapour11></Vapour11>
                    <Vapour12></Vapour12>
                </div>
            </div>
            <div className="lid"></div>
            <div className="cup"></div>
            <div className="bottom"></div>
        </div>
    )
}

export default Coffee;