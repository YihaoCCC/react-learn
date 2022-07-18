import 'antd/dist/antd.min.css';
import { Button, Input } from 'antd';
import { Space, Table, Tag } from 'antd';
import { message, Popconfirm } from 'antd';
import { Component, createRef } from 'react';
const { Search } = Input;

class Todo extends Component {
    myref = createRef()
    search =() => {
        this.setState({
            data: this.state.data.filter(item => item.name === this.myref.current.input.value)
        })
    }
    onSearch = (value) => {
        let newItem = {
            key: value,
            name: value,
            age: 32,
            address: 'test',
            tags: ['nice', 'developer', 'singer'],
          }
        this.setState({
            data: [...this.state.data, newItem]
        })
        message.success('success');
    }
    cancel = (e) => {
        console.log(e);
        message.error('Click on No');
      }
      confirm (e) {
        console.log(e);
        this.setState({
            data: this.state.data.filter((item) => item.key !== e)
        })
        message.success('Click on Yes');
      };
    state = {
        data : [
            {
              key: '1',
              name: 'John Brown',
              age: 32,
              address: 'New York No. 1 Lake Park',
              tags: ['nice', 'developer'],
            },
            {
              key: '2',
              name: 'Jim Green',
              age: 42,
              address: 'London No. 1 Lake Park',
              tags: ['loser'],
            },
            {
              key: '3',
              name: 'Joe Black',
              age: 32,
              address: 'Sidney No. 1 Lake Park',
              tags: ['cool', 'teacher'],
            },
          ],
          columns : [
            {
              title: 'Name',
              dataIndex: 'name',
              key: 'name',
              render: (text) => <a href='javascript'>{text}</a>,
            },
            {
              title: 'Age',
              dataIndex: 'age',
              key: 'age',
            },
            {
              title: 'Address',
              dataIndex: 'address',
              key: 'address',
            },
            {
              title: 'Tags',
              key: 'tags',
              dataIndex: 'tags',
              render: (_, { tags }) => (
                <>
                  {tags.map((tag) => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
          
                    if (tag === 'loser') {
                      color = 'volcano';
                    }
          
                    return (
                      <Tag color={color} key={tag}>
                        {tag.toUpperCase()}
                      </Tag>
                    );
                  })}
                </>
              ),
            },
            {
              title: 'Action',
              key: 'action',
              render: (_, record) => (
                <Space size="middle">
                  <a href='javascript'>Invite {record.name}</a>
                  <Popconfirm
                        title="Are you sure to delete this task?"
                        onConfirm={() => this.confirm(record.key)}
                        onCancel={() => this.cancel(record.key)}
                        okText="Yes"
                        cancelText="No"
                    >
                    <a href='javascript'>Delete</a>
                  </Popconfirm>
                </Space>
              ),
            },
          ]
    }
    render() {
        return (
            <>
                <div style={{width: '500px'}}>
                    <Search
                        ref={this.myref}
                        placeholder="input  text"
                        allowClear
                        enterButton="add a message"
                        size="large"
                        onSearch={ this.onSearch}
                    />
                </div>
                <Button type='danger' onClick={this.search}>搜索</Button>
                <Table style={{width: '100%'}} columns={this.state.columns} dataSource={this.state.data} />
            </>
        )
    }
}

export default Todo