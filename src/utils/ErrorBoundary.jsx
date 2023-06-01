import{Component} from 'react'

class ErrorBoundary extends Component {
    state = {
      hasError: false
    };
  
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      // You can log the error or perform any other actions here
      console.error(error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        // You can render an error fallback component here
        return <h1>Oops! Something went wrong.</h1>;
      }
  
      return this.props.children;
    }
  }

  export default ErrorBoundary