import {
    Button,
    Col,
    Input,
    Row,
    DatePicker,
    TreeSelect,
} from 'antd';
import React, { useState } from 'react';
import { Moment } from 'moment';
import { TreeComponent } from './TreeComponent';
import { TreeNodeValue } from 'antd/lib/tree-select/interface';

export interface TransactionsComponentProps {
    // loading: boolean;
    // onSubmit: (email: string, password: string) => void;
    // error: string | null;
}

const { RangePicker } = DatePicker;
type DatesRange = undefined[] | [Moment] | [undefined, Moment] | [Moment, Moment];

const styles = {
    tree: {
        width: 350,
        padding: '5px 5px',
    },
    background: {
        background: '#ebf3fc',
        padding: '25px 20px 10px',
    },
    control: {
        padding: '5px 5px',
    },
};

const data = {
    cardData: [
        {
            title: '466253026',
            value: '466253026',
            key: '0',
        },
        {
            title: '782555..36996',
            value: '782555..36996',
            key: '1',
        },
        {
            title: '466244133',
            value: '466244133',
            key: '2',
        },
        {
            title: '782555..57279',
            value: '782555..57279',
            key: '3',
        },
        {
            title: '466248318',
            value: '466248318',
            key: '4',
        },
        {
            title: '466248319',
            value: '466248319',
            key: '5',
        },
    ],
    cardTypeData: [
        {
            title: 'ЕКА_Процессинг Offline',
            value: 'ЕКА_Процессинг Offline',
            key: '0',
        },
        {
            title: 'ЕКА_Процессинг Online',
            value: 'ЕКА_Процессинг Online',
            key: '1',
        },
    ],
    driverData: [
        {
            title: 'Кропоткин Пётр Алексеевич',
            value: 'Кропоткин Пётр Алексеевич',
            key: '0',
        },
        {
            title: 'Войков Пётр Лазаревич',
            value: 'Войков Пётр Лазаревич',
            key: '1',
        },
    ],
    fuelStationData: [
        {
            title: 'ЕКА_Процессинг Offline',
            value: 'ЕКА_Процессинг Offline',
            key: '0',
        },
        {
            title: 'ЕКА_Процессинг Online',
            value: 'ЕКА_Процессинг Online',
            key: '1',
        },
    ],
    fuelData: [
        {
            title: 'Топливо',
            value: 'Топливо',
            key: '0',
            children: [
                {
                    title: 'АИ-92',
                    value: 'АИ-92',
                    key: '0-0',
                },
                {
                    title: 'АИ-95',
                    value: 'АИ-95',
                    key: '0-1',
                },
                {
                    title: 'АИ-98',
                    value: 'АИ-98',
                    key: '0-2',
                },
                {
                    title: 'ДТ',
                    value: 'ДТ',
                    key: '0-3',
                },
                {
                    title: 'АИ-95 Ф',
                    value: 'АИ-95 Ф',
                    key: '0-4',
                },
                {
                    title: '100 Ф',
                    value: '100 Ф',
                    key: '0-5',
                },
            ]
        },
        {
            title: 'Все доп. услуги',
            value: 'Все доп. услуги',
            key: '1',
            children: [
                {
                    title: 'Газ',
                    value: 'Газ',
                    key: '1-0',
                },
            ]
        },
    ],
    programmData: [
        {
            title: 'ЕКА МКАД+50КМ',
            value: 'ЕКА МКАД+50КМ',
            key: '0',
            children: [
                {
                    title: 'Выделенная',
                    value: 'Выделенная',
                    key: '0-0',
                },
            ]
        },
        {
            title: 'ЕКА Город',
            value: 'ЕКА Город',
            key: '1',
            children: [
                {
                    title: 'Общие',
                    value: 'Общие',
                    key: '1-0',
                },
            ]
        },
    ],
};

export const TransactionsComponent = (props: TransactionsComponentProps) => {

    const [dates, setDates] = useState<DatesRange>([]);
    const [fuel, setFuel] = useState<TreeNodeValue>([]);
    const [cardTypes, setCardTypes] = useState<TreeNodeValue>([]);
    const [programms, setProgramms] = useState<TreeNodeValue>([]);
    const [cards, setCards] = useState<TreeNodeValue>([]);
    const [fuelStations, setFuelStations] = useState<TreeNodeValue>([]);
    const [drivers, setDrivers] = useState<TreeNodeValue>([]);

    const handleOnChangeRangePicker = (dates: DatesRange, dateStrings: [string, string]) => {
        setDates(dates);
    };

    const handleClearButtonClick = () => {
        setDates([]);
        setFuel([]);
        setCardTypes([]);
        setProgramms([]);
        setCards([]);
        setFuelStations([]);
        setDrivers([]);
    };

    const handleSubmitButtonClick = () => {
        console.log({
            dates: dates,
            fuel: fuel,
            cardTypes: cardTypes,
            programms: programms,
            cards: cards,
            fuelStations: fuelStations,
            drivers: drivers,
        });
    };

    return (
        <Row
            type="flex"
            justify="center"
            align="top"
            style={styles.background}
        >
            <Col>
                <Row>
                    <RangePicker 
                        onChange={handleOnChangeRangePicker} 
                        style={styles.tree}
                        value={dates}
                        placeholder={['Начало', 'Конец']}
                    />
                </Row>

                <Row>
                    <TreeComponent
                        data={data.fuelData}
                        placeholder="Топливо и доп. услуги"
                        groupingLabel="Топливо и доп. услуги"
                        onChange={setFuel}
                        style={styles.tree}
                        groupingLevel={1}
                        selected={fuel}
                    />
                </Row>
            </Col>
            
            <Col>
                <Row>
                    <TreeComponent
                        data={data.cardTypeData}
                        placeholder="Тип карты"
                        groupingLabel="Типы карт"
                        onChange={setCardTypes}
                        style={styles.tree}
                        groupingLevel={0}
                        selected={cardTypes}
                    />
                </Row>

                <Row>
                    <TreeComponent
                        data={data.programmData}
                        placeholder="Программа, сеть"
                        groupingLabel="Программа, сеть"
                        onChange={setProgramms}
                        style={styles.tree}
                        groupingLevel={1}
                        selected={programms}
                    />
                </Row>
            </Col>

            <Col>
                <Row>
                    <TreeComponent
                        data={data.cardData}
                        placeholder="Выберите карту"
                        groupingLabel="Карты"
                        onChange={setCards}
                        style={styles.tree}
                        groupingLevel={0}
                        selected={cards}
                    />
                </Row>

                <Row>
                    <TreeComponent
                        data={data.fuelStationData}
                        placeholder="Выберите АЗС"
                        groupingLabel="АЗС"
                        onChange={setFuelStations}
                        style={styles.tree}
                        groupingLevel={0}
                        selected={fuelStations}
                    />
                </Row>
            </Col>

            <Col>
                <Row>
                    <TreeComponent
                        data={data.driverData}
                        placeholder="Выберите водителя"
                        groupingLabel="Воители"
                        onChange={setDrivers}
                        style={styles.tree}
                        groupingLevel={0}
                        selected={drivers}
                    />
                </Row>

                <Row style={styles.control}>
                    <Col sm={12}>
                        <Row 
                            type="flex" 
                            justify="end"
                        >
                            <Button 
                                onClick={handleClearButtonClick}
                                type="link"
                            >
                                Сбросить
                            </Button>
                        </Row>
                    </Col>

                    <Col sm={12}>
                        <Row 
                            type="flex" 
                            justify="end"
                        >
                            <Button 
                                onClick={handleSubmitButtonClick}
                                type="primary"
                            >
                                Применить
                            </Button>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};
