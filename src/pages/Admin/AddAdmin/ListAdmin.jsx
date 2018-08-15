import React, { Component } from 'react';
import { Table } from 'antd'
// redux
import { connect } from 'react-redux'
import { getAdminApi } from '../../../redux/actions/adminAction'

const columns = [
    {
        title: 'Ussername',
        dataIndex: 'ussername',
        key: 'ussername',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    }
];

class ListAdmin extends Component {
    componentDidMount() {
        this.props.getAdmin()
    }

    render() {
        const { dataAdmin } = this.props
        return (
            <div className="p-3 shadow-lg">
                <h2>List admin</h2>
                <Table dataSource={dataAdmin} columns={columns} />
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        dataAdmin: state.adminReducers.admin
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAdmin:()=> { dispatch(getAdminApi()) }
    }
}

const ListAdminRedux = connect(mapStateToProps, mapDispatchToProps)(ListAdmin)

export default ListAdminRedux;