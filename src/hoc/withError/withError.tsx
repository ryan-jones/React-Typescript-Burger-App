import * as React from 'react';
import Modal from '../../components/UI/Modal/Modal';
import { AxiosRequestConfig, AxiosResponse } from '../../../node_modules/axios';

const withErrorHandler = (WrappedComponent: any, axios: any) => {
  return class extends React.Component {

    public state = {
      error: {
        message: ''
      },
      hasError: false
    }

    public reqInterceptor: AxiosRequestConfig;
    public resInterceptor: AxiosResponse;

    public componentDidMount(): void {
      this.reqInterceptor = axios.interceptors.request.use((req: any) => {
        this.setState({ error: { message: '' }, hasError: false });
        return req;
      })
      this.resInterceptor = axios.interceptors.response.use(null, (error: any) => {
        this.setState({ error, hasError: true });
      })
    }

    public componentWillUnmount(): void {
      axios.interceptors.eject(this.reqInterceptor);
      axios.interceptors.eject(this.resInterceptor);
    }

    public clearError = (): void => this.setState({ error: { message: '' }, hasError: false });

    public render() {
        return (
          <React.Fragment >
            <Modal 
              show={this.state.hasError}
              modalClosed={() => this.clearError()}>
              {this.state.error.message}
            </Modal>
            <WrappedComponent {...this.props} />;
          </React.Fragment> 
        )
      }
    }
}

export default withErrorHandler;