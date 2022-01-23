import React from 'react'
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const FilterMenu = ({sortByName, sortByLifeSpan, sortByWeight}) => {

    const onSelectFilter = ({key}) => {
        switch(key){
            case "name":
                sortByName();
                break;
            case "life-span":
                sortByLifeSpan()
                break;
            case "weight":
                sortByWeight()
                break;
            default:
                break;
        }
    }

    const menu = (
        <Menu onClick={onSelectFilter} >
          <Menu.Item key="name" style={{fontSize:"1.15rem"}}>Sort By Name</Menu.Item>
          <Menu.Item key="life-span" style={{fontSize:"1.15rem"}}>Sort By Lifespan</Menu.Item>
          <Menu.Item key="weight" style={{fontSize:"1.15rem"}}>Soft By Weight</Menu.Item>
        </Menu>
      );

    


    return (
        <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()} style={{fontSize:"1.25rem"}} >
                Sort <DownOutlined />
            </a>
        </Dropdown>
    );
}

export default FilterMenu;
