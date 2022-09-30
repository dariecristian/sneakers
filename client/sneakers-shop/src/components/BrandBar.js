import React, {useContext} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {Row, Card} from "react-bootstrap";

const BrandBar = observer(() => {
    const {device} = useContext(Context)
    return (
        <Row className={"d-flex row-cols-auto"}>
            {device.brands.map(brand =>
                <Card
                    style={{cursor: "pointer"}}
                    key={brand.id}
                    className={"p-3 mb-2 ms-1 me-1"}
                    onClick={() => device.setSelectedBrand(brand)}
                    border={brand.id === device.selectedBrand.id ? 'dark' : 'light'}
                >
                    {brand.name}
                </Card>
            )}
        </Row>
    );
});

export default BrandBar;